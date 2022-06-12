import { Link } from "gatsby";
import * as React from "react";

export default function ButtonLink({ link, text }) {
  return (
    <Link
      style={{
        transition: "padding 0.15s ease-out",
      }}
      className="m-auto bg-white py-4 rounded-lg text-base-blue px-8 hover:py-3 hover:px-6 shadow-[0px_4px_16px_rgba(0,0,0,0.15)]"
      to={link}
    >
      {text}
    </Link>
  );
}
