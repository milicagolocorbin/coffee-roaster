// FORM VALIDATION SCHEMAS
import * as Yup from "yup";

// create account validation schema
const RegisterSchema = Yup.object({
  name: Yup.string()
    .trim()
    .max(18, "Name can not be more that 18 characters")
    .min(4, "Name must be at least 4 characters")
    .required("Name is required"),
  lastName: Yup.string()
    .trim()
    .max(32, "Last Name can not be more that 32 characters")
    .min(4, "Last Name must be at least 4 characters")
    .required("Last Name is required"),
  email: Yup.string()
    .trim()
    .email("Please provide valid email address")
    .required("Email is required"),
  password: Yup.string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .notOneOf(
      [Yup.ref("email"), Yup.ref("name"), Yup.ref("lastName")],
      "Name, email, or last name can't be password"
    ),
});

// login user validation schema
const LoginSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email("Please provide valid email address")
    .required("Email is required"),
  password: Yup.string().trim().required("Password is required"),
});

// forgot password validation schema
const ForgotPasswordSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email("Please provide valid email address")
    .required("Email is required"),
});

// reset password validation schema
const ResetPasswordSchema = Yup.object({
  password: Yup.string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  passwordConfirm: Yup.string()
    .trim()
    .required("Password confirm is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export {
  RegisterSchema,
  LoginSchema,
  ForgotPasswordSchema,
  ResetPasswordSchema,
};
