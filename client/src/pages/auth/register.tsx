import { useContext } from "react";
import { Link } from "react-router-dom";
// yup validation schema, formik, auth api with axios
import { InferType } from "yup";
import { RegisterSchema } from "../../validation/yup-schema";
import { Formik } from "formik";
import AuthAPI from "../../api/authApi";
// toastify
import { toast } from "react-toastify";
//context and components
import { AuthContext } from "../../context/auth/authContext";
import Layout from "../../components/layout/Layout";
import ButtonForm from "../../components/common/buttons/ButtonForm";
import FormController from "../../components/form/FormController";
// /////////////////////////// END OF IMPORTS //////////////////////////

// inferring types from yup validation
type Props = InferType<typeof RegisterSchema>;

// // MARKUP
const Register = () => {
  // global state
  const { dispatch } = useContext(AuthContext);

  // handle form submission
  const handleFormSubmit = async (values: Props) => {
    try {
      dispatch({ type: "START_LOADING" });
      const response = await AuthAPI.postToServer(values, `/auth/register`);
      console.log(response?.data?.message);
      toast.success(response?.data?.message);
      dispatch({ type: "STOP_LOADING" });
    } catch (error: any) {
      dispatch({ type: "STOP_LOADING" });
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <Layout>
      <section className="w-full max-w-xl p-6 mx-auto border rounded-sm shadow-md">
        {/* FORM HEADER START */}
        <header className="text-center">
          <h2 className="pb-8 text-2xl font-bold tracking-wider">
            Create new account
          </h2>
          <p className="pb-4 text-base font-semibold">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="font-bold underline underline-offset-4 decoration-teal-500"
            >
              Login now
            </Link>
          </p>
        </header>
        <Formik
          initialValues={{ name: "", lastName: "", email: "", password: "" }}
          validationSchema={RegisterSchema}
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
              {/* NAME */}
              <FormController
                formik={formik}
                name="name"
                type="text"
                labelName="Name"
                placeholder="Enter name"
              />
              {/* LAST NAME */}
              <FormController
                formik={formik}
                name="lastName"
                type="text"
                labelName="Last Name"
                placeholder="Enter last name"
              />
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
export default Register;
