import { useContext } from "react";
// framer motion
import { AnimatePresence } from "framer-motion";
// context and components
import AppRoutes from "./Routes";
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
        <AppRoutes />
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
