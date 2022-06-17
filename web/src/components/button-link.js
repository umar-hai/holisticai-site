import { Link } from "gatsby";
import * as React from "react";

export default function ButtonLink({ link, text, groupClass }) {
  return (
    <div
      className={`pointer-events-auto group h-[61px] flex items-center justify-center ${groupClass}`}
    >
      <Link
        style={{
          transition: "padding 0.15s ease-out",
        }}
        className="inline-block font-semibold text-[19px] m-auto bg-white py-4 rounded-lg text-base-blue px-8 group-hover:py-3 group-hover:px-6 hover:py-3 hover:px-6 shadow-hai"
        to={link}
      >
        {text}
      </Link>
    </div>
  );
}
