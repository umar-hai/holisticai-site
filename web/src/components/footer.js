import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark ">
      <div className="container mx-auto px-28 py-16">
        <div className="grid grid-cols-3">
          <div className="flex ">
            <div>
              <Link to="/">
                <StaticImage
                  src="../images/logo-footer.png"
                  alt=""
                ></StaticImage>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-[22px] text-white">Explore</h3>
            <ul className="text-text-secondary">
              <li className="mt-8">
                <Link to="/">Home</Link>
              </li>
              <li className="mt-8">
                <Link to="contact">Request Demo</Link>
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
            <h3 className="font-bold text-[22px] text-white">Contact</h3>
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
      </div>
      <div className="border-t border-text-secondary border-opacity-50">
        <div className="container mx-auto px-28 py-5 flex justify-between">
          <div className="text-white font-semibold font-roboto text-sm">
            {currentYear}. All rights reserved.
          </div>
          <div className="text-text-secondary flex gap-3">
            <Link to="https://hai-data.s3.eu-west-2.amazonaws.com/Holistic+AI+-+Website+Privacy+Policy+-+2022-04-10.pdf">
              Privacy Policy
            </Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
