import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import ButtonLink from "../button-link";

export default function Navbar() {
  return (
    <nav className="bg-base-purple h-auto lg:h-36">
      <div className="h-full py-4 gap-4  flex flex-col lg:py-0 lg:gap-0 lg:flex-row justify-between items-center px-10 container mx-auto z-10">
        <Link to="/">
          <StaticImage src="../../images/logo-navbar.png" alt=""></StaticImage>
        </Link>
        <ul className="text-white flex space-x-12 font-semibold text-[19px] items-center z-10">
          {/* <li>Home</li>
          <li>Use cases</li>
          <li>Resources</li>
          <li>Company</li> */}
          <li>
            <div className="w-[204px] flex items-center">
              <ButtonLink link="/contact" text="Request a demo"></ButtonLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
