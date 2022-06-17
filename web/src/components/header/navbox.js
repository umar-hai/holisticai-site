import { Link } from "gatsby";
import * as React from "react";

export default function Navbox({ open }) {
  return (
    <div
      className={`xl:hidden transition-all border-t border-text-secondary border-opacity-50 z-20 flex flex-col h-full items-center left-0 bg-base-purple fixed w-full content-start pt-28 top-28 lg:top-36 ${
        open ? "left-0" : "-left-full"
      }`}
    >
      <ul className="text-white space-x-12 font-semibold text-[19px]">
        <li>
          <Link to="/contact">Request a demo</Link>
        </li>
      </ul>
    </div>
  );
}
