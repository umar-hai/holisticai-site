import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import ButtonLink from "../button-link";
import Hamburger from "./hamburger";
import Navbox from "./navbox";

export default function Navbar({ shrink }) {
  const [navLinksOpen, setNavLinksOpen] = React.useState(false);

  const navLinks = [
    {
      link: "/",
      text: "Home",
    },
    {
      link: "/blog",
      text: "Blog",
    },
    {
      link: "/papers",
      text: "Papers",
    },
    {
      link: "/careers",
      text: "Careers",
    },
    // {
    //   link: "/about-us",
    //   text: "About",
    // },
  ];

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
          className={`${
            shrink ? "block min-w-[148px] z-10" : "block lg:hidden z-10"
          }`}
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
          {navLinks.map((navLink) => (
            <li activeClassName="" className="">
              <Link
                className="opacity-70 relative after:contents-[''] hover:opacity-100 after:absolute after:bottom-0 after:left-2/4 after:hover:w-full after:transition-all after:duration-500 after:-translate-x-2/4 after:w-5 after:h-1 after:bg-white after:rounded-3xl pb-2"
                activeClassName="opacity-100 after:w-full"
                to={navLink.link}
              >
                {navLink.text}
              </Link>
            </li>
          ))}

          <li>
            <ButtonLink link="/contact" text="Request a demo"></ButtonLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
