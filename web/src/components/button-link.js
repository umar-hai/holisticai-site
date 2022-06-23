import { Link } from "gatsby";
import * as React from "react";

export default function ButtonLink({ link, text, groupClass }) {
  return (
    <div
      className={`pointer-events-auto group h-[61px] flex items-center justify-center ${groupClass}`}
    >
      <Link
        className="transition-all duration-150 inline-block font-semibold text-[19px] m-auto bg-white py-4 rounded-lg text-base-blue px-8 group-hover:text-[17px] group-hover:py-[15px] group-hover:px-[31px] shadow-hai"
        to={link}
      >
        {text}
      </Link>
    </div>
  );
}
