import { FC } from "react";

type Props = {
  submitAllowed: boolean;
};

// MARKUP
const ButtonForm: FC<Props> = ({ submitAllowed }) => {
  return (
    <button
      disabled={submitAllowed}
      className="w-2/4 px-2 py-2 mx-auto text-lg font-bold tracking-wider text-center uppercase bg-teal-500 rounded-md shadow-md hover:bg-teal-500/90 hover:shadow-lg disabled:cursor-not-allowed"
      type="submit"
    >
      submit
    </button>
  );
};
export default ButtonForm;
