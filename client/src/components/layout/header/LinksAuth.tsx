import { FC } from "react";
import { Link } from "react-router-dom";

// MARKUP
const LinksAuth: FC = () => {
  return (
    <div className="mr-4 font-bold leading-loose tracking-wider uppercase sm:ml-4">
      <Link
        to="/auth/register"
        className="px-2 py-2 mx-2 text-sm border border-teal-600 rounded-md sm:mx-4 sm:text-base hover:bg-teal-600"
      >
        register
      </Link>
      <Link
        to="/auth/login"
        className="px-2 py-2 mx-2 text-sm border border-teal-600 rounded-md sm:mx-4 sm:text-base hover:bg-teal-600"
      >
        login
      </Link>
    </div>
  );
};
export default LinksAuth;
