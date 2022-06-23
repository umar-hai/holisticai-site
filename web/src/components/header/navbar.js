import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import ButtonLink from "../button-link";
import Hamburger from "./hamburger";
import Navbox from "./navbox";

export default function Navbar({ shrink }) {
  const [navLinksOpen, setNavLinksOpen] = React.useState(false);

  return (
    <nav className="bg-base-purple h-full">
      <div className="h-full py-4 gap-4 flex lg:py-0 lg:gap-0 lg:flex-row justify-between items-center px-10 container mx-auto z-10">
        <Link className={`${shrink ? "hidden" : "hidden lg:block"}`} to="/">
          <StaticImage
            src="../../images/logo-navbar.png"
            alt=""
            quality={100}
            placeholder="blurred"
          ></StaticImage>
        </Link>
        <Link
          className={`${shrink ? "block min-w-[148px]" : "block lg:hidden"}`}
          to="/"
        >
          <StaticImage
            width={148}
            src="../../images/logo-navbar.png"
            alt=""
            quality={100}
            placeholder="blurred"
          ></StaticImage>
        </Link>
        <div
          onClick={() => setNavLinksOpen(!navLinksOpen)}
          className="flex xl:hidden cursor-pointer h-full z-10"
        >
          <Hamburger open={navLinksOpen}></Hamburger>
        </div>
        <Navbox open={navLinksOpen} shrink={shrink}></Navbox>
        <ul className="hidden xl:flex text-white space-x-12 font-semibold text-[19px] items-center z-10">
          <li>
            <Link className="opacity-70 " activeClassName="opacity-100" to="/">
              Home
            </Link>{" "}
          </li>
          <li>
            <Link
              className="opacity-70 "
              activeClassName="opacity-100"
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="opacity-70 "
              activeClassName="opacity-100"
              to="/careers"
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              className="opacity-70 "
              activeClassName="opacity-100"
              to="/about-us"
            >
              About
            </Link>
          </li>
          <li>
            <div>
              <ButtonLink
                groupClass="min-w-[204px]"
                link="/contact"
                text="Request a demo"
              ></ButtonLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
