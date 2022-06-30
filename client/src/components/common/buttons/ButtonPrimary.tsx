import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  route: string;
  children: ReactNode;
};

// MARKUP
const ButtonPrimary: FC<Props> = ({ route, children }) => {
  return (
    <Link
      to={route}
      className="px-6 py-3 mx-auto text-lg font-bold tracking-wider text-center uppercase bg-teal-500 rounded-md shadow-md hover:bg-teal-500/90 hover:shadow-lg"
    >
      {children}
    </Link>
  );
};

export default ButtonPrimary;
