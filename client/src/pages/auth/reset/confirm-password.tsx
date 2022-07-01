import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
// yup validation schema, formik, auth api with axios
import { InferType } from "yup";
import { ResetPasswordSchema } from "../../../validation/yup-schema";
import { Formik } from "formik";
import AuthAPI from "../../../api/authApi";
// toastify
import { toast } from "react-toastify";
//context and components
import { AuthContext } from "../../../context/auth/authContext";
import Layout from "../../../components/layout/Layout";
import ButtonForm from "../../../components/common/buttons/ButtonForm";
import FormController from "../../../components/form/FormController";
/////////////////////////// END OF IMPORTS //////////////////////////
// inferring types from yup validation
type Props = InferType<typeof ResetPasswordSchema>;

// MARKUP
const ConfirmPassword = () => {
  // react router dom
  const { resetString } = useParams();
  const navigate = useNavigate();
  // global state
  const { dispatch } = useContext(AuthContext);

  // handeling form submission
  const handleFormSubmit = async (values: Props) => {
    try {
      dispatch({ type: "START_LOADING" });
      const response = await AuthAPI.patchToServer(
        values,
        `/auth/reset/${resetString}`
      );
      dispatch({ type: "STOP_LOADING" });
      toast.success(response?.data?.message);
      navigate("/auth/login");
    } catch (error: any) {
      dispatch({ type: "STOP_LOADING" });
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <Layout>
      <section className="w-full max-w-xl p-6 mx-auto border rounded-sm shadow-md">
        {/* FORM HEADER START */}
        <header className="text-center">
          <h2 className="pb-8 text-2xl font-bold tracking-wider">
            Enter new password
          </h2>
          <p className="pb-6 text-base font-semibold">
            Please enter new password and confirm it
          </p>
        </header>
        <Formik
          initialValues={{ password: "", passwordConfirm: "" }}
          validationSchema={ResetPasswordSchema}
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
              {/* PASSWORD */}
              <FormController
                formik={formik}
                name="password"
                type="password"
                labelName="Password"
                placeholder="Enter your password"
              />
              {/* CONFIRM PASSWORD  */}
              <FormController
                formik={formik}
                name="passwordConfirm"
                type="password"
                labelName="Confirm Password"
                placeholder="Confirm your password"
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
export default ConfirmPassword;
