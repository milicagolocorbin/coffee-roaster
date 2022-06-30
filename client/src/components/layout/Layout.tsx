import { FC } from "react";
import { motion } from "framer-motion";

type Props = {
  children?: React.ReactNode;
};
// framer motion
const variants = {
  hidden: { opacity: 0, y: 10 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

// MARKUP
const Layout: FC<Props> = ({ children }) => {
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5 }}
      className="grid w-full min-h-[calc(100vh-7rem)] max-w-screen-2xl mx-auto place-items-center xs:w-11/12 py-12 s:py-14 sm:py-16 md:py-20 xl:py-24 2xl:py-28 gap-y-12 s:gap-y-14 sm:gap-y-16 md:gap-y-20 xl:gap-y-24 2xl:gap-y-28 md:w-10/12 text-slate-900"
    >
      {children}
    </motion.main>
  );
};
export default Layout;
