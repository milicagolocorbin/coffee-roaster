import { FC } from "react";
import { Link } from "react-router-dom";
// components
import SocialLinks from "./SocialLinks";
// footer content
import locations from "./info";

// MARKUP
const Footer: FC = () => {
  return (
    <footer className="w-full py-12 text-center bg-gradient-to-br from-slate-700 to-slate-900 text-zinc-50">
      <Link to="/">
        <img src="/logo-white.svg" alt="logo" className="mx-auto" />
      </Link>
      <h3 className="py-12 text-2xl font-bold">
        Our Locations Around the World:
      </h3>
      <div className="grid w-11/12 mx-auto max-w-screen-2xl gap-y-6 place-items-center s:grid-cols-2 sm:grid-cols-3">
        {locations.map((location) => {
          return (
            <div key={location.id} className="space-y-4 w-44 s:text-left">
              <h4 className="text-xl font-bold">{location.country}</h4>
              <p>{location.address}</p>
              <p>{location.city}</p>
              <p>{location.zip}</p>
              <p>{location.phone}</p>
            </div>
          );
        })}
      </div>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
