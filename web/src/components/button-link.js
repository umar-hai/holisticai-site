import { Link } from "gatsby";
import * as React from "react";

export default function ButtonLink({ link, text, groupClass }) {
  return (
    <Link
      className="pointer-events-auto transition-all ease-in-out duration-500 inline-block font-semibold text-[19px] m-auto bg-white py-4 rounded-lg text-base-blue px-8 hover:scale-95 shadow-hai"
      to={link}
    >
      {text}
    </Link>
  );
}
