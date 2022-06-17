import * as React from "react";
import Title from "../../title";
import { StaticImage } from "gatsby-plugin-image";
import HaiContainer from "../hai-container";

export default function HeroSecondary({ children }) {
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
          <Title classNames="text-white">{children.title}</Title>
        </div>
        {children.subtitle ? (
          <div className="text-center text-[22px] text-white font-roboto mt-10">
            {children.subtitle}
          </div>
        ) : (
          <></>
        )}
        {children.content ? (
          <div className="mt-10 lg:mt-24">{children.content}</div>
        ) : (
          <></>
        )}
      </HaiContainer>
    </header>
  );
}
