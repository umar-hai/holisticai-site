import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Title from "../../title";
import HaiContainer from "../hai-container";
import HaiPlatformBullet from "./hai-platform-bullet";

export default function HaiPlatform() {
  return (
    <section className="bg-base-purple relative">
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
        <Title classNames="text-white">HAI Platform</Title>
        <div className="mt-10 flex">
          <div className="flex-1">
            <div className="font-bold text-[22px] text-white">
              Our unique platform offers a cost-effective and scalable solution
              to manage your AI assets
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <HaiPlatformBullet text="Map your systems with a comprehensive AI Inventory"></HaiPlatformBullet>
              <HaiPlatformBullet text="Standardize risk-management methods across the enterprise"></HaiPlatformBullet>
              <HaiPlatformBullet text="Prepare safe, legal and ethical deployment of AI"></HaiPlatformBullet>
              <HaiPlatformBullet text="Future-proof your system Regulatory-ready"></HaiPlatformBullet>
              <HaiPlatformBullet text="Protect your data assets and govern their usage"></HaiPlatformBullet>
              <HaiPlatformBullet text="Improve procurement and onboarding of AI suppliers"></HaiPlatformBullet>
            </div>
          </div>
          <div className="flex-1 justify-end">
            <StaticImage
              quality={100}
              src="../../images/hai-platform.png"
            ></StaticImage>
          </div>
        </div>
      </HaiContainer>
    </section>
  );
}
