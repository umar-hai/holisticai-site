import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center   bg-base-purple h-36">
      <div className="flex justify-between items-center px-10 container mx-auto">
        <Link to="/">
          <StaticImage src="../../images/logo-navbar.png" alt=""></StaticImage>
        </Link>
        <ul className="text-white flex space-x-12 font-semibold text-[19px]">
          <li>Home</li>
          <li>Use cases</li>
          <li>Resources</li>
          <li>Company</li>
          <li>
            <Link
              className="bg-white py-4 rounded-lg text-base-blue px-8"
              to="/contact"
            >
              Request a demo
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
