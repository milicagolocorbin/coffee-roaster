import { Link } from "react-router-dom";
// yup validation schema and formik
import { InferType } from "yup";
import { LoginSchema } from "../../validation/yup-schema";
import { Formik } from "formik";
//components
import Layout from "../../components/layout/Layout";
import ButtonForm from "../../components/common/buttons/ButtonForm";
import FormController from "../../components/form/FormController";
/////////////////////////// END OF IMPORTS //////////////////////////

// inferring types from yup validation
type Props = InferType<typeof LoginSchema>;

// MARKUP
const Login = () => {
  // handeling form submission
  const handleFormSubmit = async (values: Props) => {
    console.log(values);
  };
  return (
    <Layout>
      <section className="w-full max-w-xl p-6 mx-auto border rounded-sm shadow-md">
        {/* FORM HEADER START */}
        <header className="text-center">
          <h2 className="pb-8 text-2xl font-bold tracking-wider">
            Log in your account
          </h2>
          <p className="pb-6 text-base font-semibold">
            Do not have an account yet?{" "}
            <Link
              to="/auth/register"
              className="font-bold underline underline-offset-4 decoration-teal-500"
            >
              Create one now
            </Link>
          </p>
        </header>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values, onSubmitProps) => {
            handleFormSubmit(values);
            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
          }}
        >
          {/* FORM BODY START */}
          {(formik) => (
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-y-6"
            >
              {/* EMAIL */}
              <FormController
                formik={formik}
                name="email"
                type="text"
                labelName="Email Address"
                placeholder="Enter your email address"
              />
              {/* PASSWORD */}
              <FormController
                formik={formik}
                name="password"
                type="password"
                labelName="Password"
                placeholder="Enter your password"
              />
              <Link
                to="/auth/forgot-password"
                className="ml-auto font-bold underline underline-offset-4 decoration-teal-500"
              >
                Forgot Password
              </Link>
              <ButtonForm
                submitAllowed={
                  !(formik.isValid && formik.dirty) || formik.isSubmitting
                }
              />
            </form>
          )}
        </Formik>
      </section>
    </Layout>
  );
};
export default Login;
