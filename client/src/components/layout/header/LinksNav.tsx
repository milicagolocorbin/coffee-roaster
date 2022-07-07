import { FC } from "react";
import { Link } from "react-router-dom";

// MARKUP
const LinksNav: FC = () => {
  return (
    <nav className="flex justify-between font-bold leading-loose tracking-wider uppercase lg:grow gap-x-6 md:gap-x-8">
      <Link to="/" className="hover:text-teal-600 hover:scale-105">
        home
      </Link>
      <Link to="/coffee" className="hover:text-teal-600 hover:scale-105">
        coffee
      </Link>
      <Link to="/plan" className="hover:text-teal-600 hover:scale-105">
        create plan
      </Link>
    </nav>
  );
};
export default LinksNav;
