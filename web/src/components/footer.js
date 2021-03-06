import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import HaiContainer from "./hai-container";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark ">
      <HaiContainer>
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className="flex flex-col justify-between gap-8 lg:gap-0">
            <Link to="/">
              <StaticImage src="../images/logo-footer.png" alt=""></StaticImage>
            </Link>

            <a
              href="https://www.linkedin.com/company/holisticai/"
              className="text-text-secondary hover:text-stroke"
            >
              <StaticImage src="../images/linked-in.png" alt=""></StaticImage>
              <span className="ml-2 font-roboto text-sm">Follow us</span>
            </a>
          </div>

          <div>
            <h3 className="font-bold text-[22px] text-white mt-10 lg:mt-2">
              Explore
            </h3>
            <ul className="text-text-secondary">
              <li className="mt-8">
                <Link className="hover:text-stroke" to="/">
                  Home
                </Link>
              </li>
              <li className="mt-8">
                <Link className="hover:text-stroke" to="/careers">
                  Careers
                </Link>
              </li>
              {/* <li className="mt-8">
                <Link className="hover:text-stroke" to="/about-us">
                  About
                </Link>
              </li> */}
              <li className="mt-8">
                <Link className="hover:text-stroke" to="/contact">
                  Request Demo
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[22px] text-white mt-10 lg:mt-2">
              Resources
            </h3>
            <ul className="text-text-secondary">
              <li className="mt-8">
                <Link className="hover:text-stroke" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="mt-8">
                <Link className="hover:text-stroke" to="/papers">
                  Papers
                </Link>
              </li>
            </ul>
          </div>
          {/* <div>
            <h3 className="font-extrabold text-2xl text-white">Resources</h3>
            <ul>
              <li className="text-white font-extrabold mt-8">Insights</li>
              <li className="text-white font-extrabold mt-6">Policies</li>
            </ul>
          </div> */}
          <div>
            <h3 className="font-bold text-[22px] text-white mt-10 lg:mt-2">
              Contact
            </h3>
            <ul>
              <li className="text-text-secondary  mt-8">
                18 Soho Square, London, W1D 3QH, United Kingdom
              </li>
              <li className="text-text-secondary  mt-6">+44 (0) 207 0310822</li>
              <li className="text-text-secondary  mt-6">we@holisticai.com</li>
            </ul>
          </div>
        </div>
        {/* <div className="flex justify-between items-center mt-10">
          <div className="text-white">
            Copyright @{currentYear}
            <span className="font-extrabold"> Holistic AI</span> All rights
            reserved
          </div>
          <div className="text-white flex gap-3">
            <Link to="https://hai-data.s3.eu-west-2.amazonaws.com/Holistic+AI+-+Website+Privacy+Policy+-+2022-04-10.pdf">
              Privacy Policy
            </Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>
        </div> */}
      </HaiContainer>
      <div className="border-t border-text-secondary border-opacity-50">
        <div className="container mx-auto px-6 lg:px-8 xl:px-28 py-5 flex justify-between">
          <div className="text-white font-semibold font-roboto text-sm">
            {currentYear}. All rights reserved.
          </div>
          <div className="text-text-secondary flex gap-3">
            {/* <Link to="https://hai-data.s3.eu-west-2.amazonaws.com/Holistic+AI+-+Website+Privacy+Policy+-+2022-04-10.pdf">
              Privacy Policy
            </Link> */}
            <Link className="hover:text-stroke" to="/cookie-policy">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
