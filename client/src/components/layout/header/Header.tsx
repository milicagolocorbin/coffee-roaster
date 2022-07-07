import { FC, useContext } from "react";
import { Link } from "react-router-dom";
//context, components and icons
import { AuthContext } from "../../../context/auth/authContext";
import LinksNav from "./LinksNav";
import LinksAuth from "./LinksAuth";
import Dropdown from "./Dropdown";
import Sidebar from "../sidebar/Sidebar";
import { FaShoppingCart } from "react-icons/fa";

// MARKUP
const Header: FC = () => {
  // local state
  const { state } = useContext(AuthContext);

  return (
    <header className="w-full shadow-md text-slate-900">
      <div className="border-b border-teal-900/10">
        <img className="block py-5 mx-auto" src="/logo.svg" alt="logo" />
      </div>
      <div className="flex items-center justify-between w-11/12 h-full py-5 mx-auto max-w-screen-2xl">
        <div className="hidden sm:block">
          <LinksNav />
        </div>
        <Sidebar />
        <div className="flex items-center justify-end xl:grow">
          {state.auth ? <Dropdown /> : <LinksAuth />}
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
