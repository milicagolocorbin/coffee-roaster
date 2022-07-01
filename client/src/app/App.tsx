import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
// framer motion
import { AnimatePresence } from "framer-motion";
// pages
import Home from "../pages/home";
import CoffeeCollection from "../pages/coffee";
import CreatePlan from "../pages/plan";
import Register from "../pages/auth/register";
import Login from "../pages/auth/login";
import ForgotPassword from "../pages/auth/forgot-password";
import VerifyEmail from "../pages/auth/verify/verificationString";
import VerifyPassword from "../pages/auth/reset/resetString";
import ConfirmPassword from "../pages/auth/reset/confirm-password";
// components
import { AuthContext } from "../context/auth/authContext";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import LoadingLogo from "../components/common/skeleton/LoadingLogo";

const App = () => {
  const { state } = useContext(AuthContext);
  if (state.loading) {
    return <LoadingLogo />;
  }
  return (
    <>
      <Header />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coffee" element={<CoffeeCollection />} />
          <Route path="/plan" element={<CreatePlan />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/auth/verify/:verificationString"
            element={<VerifyEmail />}
          />
          <Route path="/auth/reset/:resetString" element={<VerifyPassword />} />
          <Route
            path="/auth/reset/:resetString/confirm-password"
            element={<ConfirmPassword />}
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
