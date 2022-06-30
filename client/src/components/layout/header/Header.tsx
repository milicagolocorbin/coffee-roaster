import { FC, useState } from "react";
import { Link } from "react-router-dom";
// components and icons
import LinksNav from "./LinksNav";
import LinksAuth from "./LinksAuth";
import Dropdown from "./Dropdown";
import Sidebar from "../sidebar/Sidebar";
import { FaShoppingCart } from "react-icons/fa";

// MARKUP
const Header: FC = () => {
  // local state
  const [loggedIn] = useState(false);

  return (
    <header className="w-full shadow-md h-28 text-slate-900">
      <div className="flex items-center justify-between w-11/12 h-full mx-auto max-w-screen-2xl">
        <div className="hidden mx-4 sm:block xl:mx-12 xl:grow">
          <Link to="/">
            <img src="/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="hidden lg:block">
          <LinksNav />
        </div>
        <Sidebar />
        <div className="flex items-center justify-end xl:grow">
          {loggedIn ? <Dropdown /> : <LinksAuth />}
          <span className="h-8 mr-4 border-l-2 border-teal-600"></span>
          <Link to="/cart/">
            <FaShoppingCart className="w-5 h-5 hover:text-teal-600 hover:scale-110" />
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
