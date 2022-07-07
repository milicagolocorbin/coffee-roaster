import { Routes, Route } from "react-router-dom";
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
import NotFound from "../pages/not-found";

// MARKUP
const AppRoutes = () => {
  return (
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
