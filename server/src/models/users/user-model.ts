import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import { IUser } from "../../types/user-interface";
import {
  generateRandomSecretKey,
  generateRandomHash,
} from "../../config/auth/generate-secret";

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      maxLength: 18,
      minLength: 4,
      trim: true,
      lowercase: true,
    },
    lastName: {
      type: String,
      required: true,
      maxLength: 32,
      minLength: 4,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    emailVerified: {
      type: String,
      required: false,
    },
    // sets duration of verify email link to 1h, so you have 1 hour to verify it, after that temporary user is deleted from db; needs to be named expireAt because of enter in db
    expireAt: {
      type: Date,
      required: false,
      default: () => new Date(+new Date() + 1 * 60 * 60 * 1000),
    },
    passwordResetString: {
      type: String,
      required: false,
    },
    passwordResetStringExp: {
      type: Date,
      required: false,
    },
    role: {
      type: String,
      default: "temp",
      enum: ["admin", "user", "temp"],
    },
    avatar: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

// Remove password from the response
UserSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret.password;
    return ret;
  },
});

// hash password before saving it to db
UserSchema.pre("save", async function (next) {
  // we want to encrypt password only when we create new password or update it...not when any other field is entered or updated
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
// compare passwords method
UserSchema.methods.comparePassword = async function (passToCompare: string) {
  return await bcrypt.compare(passToCompare, this.password);
};
// create verify email random string
UserSchema.methods.verifyEmail = function () {
  // create random string
  const verifyString = generateRandomSecretKey(32);
  // save encrypted random string to db
  this.emailVerified = generateRandomHash(verifyString);
  // YOU NEED TO ENTER IT MANUALLY IN DB
  // db.users.createIndex( { "expireAt": 1 }, { expireAfterSeconds: 0, partialFilterExpression: { "isActive": false } } )
  // return random string to user
  return verifyString;
};
// create verify email random string
UserSchema.methods.verifyPassword = function () {
  // create random string
  const resetString = generateRandomSecretKey(32);
  // save encrypted random string to db
  this.passwordResetString = generateRandomHash(resetString);
  // sets duration of reset password request to 1 hour, so you can not request new one until after 1 hour
  this.passwordResetStringExp = Date.now() + 1 * 60 * 60 * 1000;
  // return random string to user
  return resetString;
};

const User = model<IUser>("User", UserSchema);
export default User;
