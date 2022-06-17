import * as React from "react";
import Title from "../../title";
import { StaticImage } from "gatsby-plugin-image";
import ContactIconInfo from "./contact-icon-info";
import HaiContainer from "../hai-container";

export default function ContactHero() {
  return (
    <header className="bg-base-purple relative">
      <div className="absolute right-0 bottom-0">
        <StaticImage
          src="../../images/hai-logo-bg-1.png"
          alt=""
          placeholder="blurred"
        ></StaticImage>
      </div>
      <div className="absolute left-0 bottom-0">
        <StaticImage
          src="../../images/hai-logo-bg-2.png"
          alt=""
          placeholder="blurred"
        ></StaticImage>
      </div>
      <HaiContainer>
        <div className="flex justify-center flex-col items-center">
          <Title classNames="text-white">Contact Us</Title>
        </div>
        <div className="text-center text-[22px] text-white font-roboto mt-10">
          Get in touch to request a{" "}
          <span className="text-inactive-base-purple font-bold">demo</span> or
          say hello!{" "}
        </div>
        <div className="mt-10 lg:mt-24">
          <div className="flex flex-col gap-10 items-center lg:flex-row justify-center lg:gap-40">
            <ContactIconInfo type="Email" value="we@holisticai.com">
              <StaticImage
                src="../../images/email.png"
                alt=""
                quality={100}
              ></StaticImage>
            </ContactIconInfo>
            <ContactIconInfo type="Phone" value="+44(0)207 0310822">
              <StaticImage
                src="../../images/phone.png"
                alt=""
                quality={100}
              ></StaticImage>
            </ContactIconInfo>
            <ContactIconInfo
              type="Address"
              value="18 Soho Square, London, W1D 3QH"
            >
              <StaticImage
                src="../../images/address.png"
                alt=""
                quality={100}
              ></StaticImage>
            </ContactIconInfo>
          </div>
        </div>
      </HaiContainer>
    </header>
  );
}
