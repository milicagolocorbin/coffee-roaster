import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// auth api with axios
import AuthAPI from "../../../api/authApi";
// toastify
import { toast } from "react-toastify";
//components
import Layout from "../../../components/layout/Layout";
import LoadingSkeleton from "../../../components/common/skeleton/LoadingSkeleton";

// MARKUP
const VerifyPassword = () => {
  // react router dom
  const { resetString } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await AuthAPI.getFromServer(
          `/auth/reset/${resetString}`
        );
        toast.success(response.data.message);
        navigate(`/auth/reset/${resetString}/confirm-password`);
      } catch (error: any) {
        toast.error(error?.response?.data?.message);
        navigate("/auth/login");
      }
    };
    verifyUser();
  }, [navigate, resetString]);

  return (
    <Layout>
      <LoadingSkeleton />
    </Layout>
  );
};
export default VerifyPassword;
