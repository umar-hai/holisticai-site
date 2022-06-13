import { Link } from "gatsby";
import * as React from "react";

export default function ButtonLink({ link, text }) {
  return (
    <Link
      style={{
        transition: "padding 0.15s ease-out",
      }}
      className="m-auto bg-white py-4 rounded-lg text-base-blue px-8 hover:py-3 hover:px-6 shadow-hai"
      to={link}
    >
      {text}
    </Link>
  );
}
