import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Title from "../../title";
import CheckItem from "../check-item";

export default function Hero() {
  return (
    <header className="h-[988px] max-h-[988px] lg:max-h-[616px] bg-base-purple relative">
      <div className="absolute right-0 top-[-70px]">
        <StaticImage
          src="../../images/hai-logo-bg-1.png"
          alt=""
          placeholder="blurred"
        ></StaticImage>
      </div>
      <div className="absolute left-0 sm:bottom-0 lg:top-[400px]">
        <StaticImage
          src="../../images/hai-logo-bg-2.png"
          alt=""
          placeholder="blurred"
        ></StaticImage>
      </div>
      <div className="container mx-auto px-6 lg:px-8 xl:px-28 pt-5 pb-20">
        <Title classNames="text-white w-auto lg:w-[624px]">
          <div>
            Global Leaders <br className="lg:hidden" /> in AI Risk Management
          </div>
        </Title>
        <div className="flex xl:block">
          <div className="flex-1">
            <div className="w-auto xl:w-[509px] mt-10 text-white font-roboto">
              <p className="mb-10">
                <span className="text-inactive-base-purple">Holistic AI</span>{" "}
                ensures that enterprises can adopt AI with confidence and
                assurance. AI does not need to be a high-risk liability;
                Holistic AI guarantees AI that is safe, ethical, and legal. We
                assess data, models, and processes, at any level of maturity or
                scale.
              </p>

              <div className="lg:hidden">
                <StaticImage
                  src="../../images/hero-screen-sm.png"
                  quality={100}
                  width={380}
                  alt=""
                ></StaticImage>
              </div>

              <p className="mt-10">
                No matter at which maturity stage, location or scale, <br />
                Holistic AI has a solution for you.
              </p>
            </div>

            <div className="mt-8 flex flex-col space-y-4">
              <CheckItem text="Enterprise-ready SaaS Solution"></CheckItem>
              <CheckItem text="World-first AI Auditors"></CheckItem>
              <CheckItem text="Shaping AI policy worldwide"></CheckItem>
            </div>
          </div>
          <div className="hidden lg:flex xl:hidden">
            <div className="mt-auto mb-4">
              <StaticImage
                src="../../images/hero-screen-sm.png"
                quality={100}
                width={380}
                alt=""
              ></StaticImage>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex absolute top-[-70px] right-0">
        <StaticImage
          quality={100}
          style={{ margin: "auto" }}
          src="../../images/hero-screen.png"
          alt=""
          placeholder="blurred"
        ></StaticImage>
      </div>
    </header>
  );
}
