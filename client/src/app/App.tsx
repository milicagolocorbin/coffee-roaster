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
// components
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";

const App = () => {
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
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
