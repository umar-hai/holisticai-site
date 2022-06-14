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
        <div className="mt-10 flex flex-col lg:flex-row">
          <div className="flex-1">
            <div className="font-bold text-[22px] text-white">
              Our unique platform offers a cost-effective and scalable solution
              to manage your AI assets
            </div>
            <div className="block lg:hidden">
              <StaticImage
                quality={100}
                src="../../images/hai-platform.png"
                alt=""
                width={380}
              ></StaticImage>
            </div>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex justify-center">
                <HaiPlatformBullet textClass="text-white">
                  Map your systems with a comprehensive AI Inventory
                </HaiPlatformBullet>
              </div>
              <div className="flex justify-center">
                <HaiPlatformBullet textClass="text-white">
                  Standardize risk-management methods across the enterprise
                </HaiPlatformBullet>
              </div>
              <div className="flex justify-center">
                <HaiPlatformBullet textClass="text-white">
                  Prepare safe, legal and ethical deployment of AI
                </HaiPlatformBullet>
              </div>
              <div className="flex justify-center">
                <HaiPlatformBullet textClass="text-white">
                  Future-proof your system to be Regulatory-ready
                </HaiPlatformBullet>
              </div>
              <div className="flex justify-center">
                <HaiPlatformBullet textClass="text-white">
                  Protect your data assets and govern their usage
                </HaiPlatformBullet>
              </div>
              <div className="flex justify-center">
                <HaiPlatformBullet textClass="text-white">
                  Improve procurement and onboarding of AI suppliers
                </HaiPlatformBullet>
              </div>
            </div>
          </div>
          <div className="flex-1 justify-end">
            <div className="hidden lg:block xl:hidden">
              <StaticImage
                quality={100}
                src="../../images/hai-platform.png"
                alt=""
                width={448}
                height={386}
              ></StaticImage>
            </div>
            <div className="hidden xl:block">
              <StaticImage
                quality={100}
                src="../../images/hai-platform.png"
                alt=""
              ></StaticImage>
            </div>
          </div>
        </div>
      </HaiContainer>
    </section>
  );
}
