import { FC } from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

// MARKUP
const SocialLinks: FC = () => {
  return (
    <div className="flex items-center justify-between pt-12 mx-auto w-36">
      <Link to="/" className="text-3xl hover:text-teal-600 hover:scale-105">
        <FaFacebookSquare />
      </Link>
      <Link to="/" className="text-3xl hover:text-teal-600 hover:scale-105">
        <FaInstagramSquare />
      </Link>
      <Link to="/" className="text-3xl hover:text-teal-600 hover:scale-105">
        <FaTwitterSquare />
      </Link>
    </div>
  );
};
export default SocialLinks;
