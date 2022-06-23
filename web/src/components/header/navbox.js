import { Link } from "gatsby";
import * as React from "react";

export default function Navbox({ open, shrink }) {
  return (
    <div
      className={`xl:hidden transition-all border-t border-text-secondary border-opacity-50 z-20 flex flex-col h-full items-center left-0 bg-base-purple fixed w-full content-start pt-28  ${
        open ? "left-0 " : "-left-full "
      } ${shrink ? "top-20" : "top-28 lg:top-36"}`}
    >
      <ul className="text-white space-y-4 font-semibold text-[19px]">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/careers">Careers</Link>
        </li>
        <li>
          <Link to="/about-us">About</Link>
        </li>
        <li>
          <Link to="/contact">Request a demo</Link>
        </li>
      </ul>
    </div>
  );
}
