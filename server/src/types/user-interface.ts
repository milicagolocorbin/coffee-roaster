export interface IUser {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  isActive: boolean;
  emailVerified?: string;
  expireAt?: Date;
  passwordResetString?: string;
  passwordResetStringExp?: Date;
  role: string;
  avatar: string;
  refreshToken: string[];
  comparePassword: (passToCompare: string) => boolean;
  verifyEmail: () => string;
  verifyPassword: () => string;
}
