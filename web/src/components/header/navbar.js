import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import ButtonLink from "../button-link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center   bg-base-purple h-36">
      <div className="flex justify-between items-center px-10 container mx-auto">
        <Link to="/">
          <StaticImage src="../../images/logo-navbar.png" alt=""></StaticImage>
        </Link>
        <ul className="text-white flex space-x-12 font-semibold text-[19px] items-center">
          <li>Home</li>
          <li>Use cases</li>
          <li>Resources</li>
          <li>Company</li>
          <li>
            <div className="w-[204px] flex items-center">
              <ButtonLink link="/blog" text="Request a demo"></ButtonLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
