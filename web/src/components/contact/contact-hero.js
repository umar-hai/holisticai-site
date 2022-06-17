import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ContactIconInfo from "./contact-icon-info";
import HeroSecondary from "../header/hero-secondary";

export default function ContactHero() {
  return (
    <HeroSecondary>
      {{
        title: "Contact Us",
        subtitle: (
          <>
            Get in touch to request a{" "}
            <span className="text-inactive-base-purple font-bold">demo</span> or
            say hello!{" "}
          </>
        ),
        content: (
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
        ),
      }}
    </HeroSecondary>
  );
}
