import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Title from "../../title";
import HaiContainer from "../hai-container";
import HaiPlatformBullet from "./hai-platform-bullet";

export default function AiAuditing() {
  return (
    <section className="bg-white">
      <HaiContainer>
        <Title
          classNames="text-base-blue"
          dividerColor="bg-base-purple border-base-purple"
        >
          AI Auditing
        </Title>
        <div className="flex flex-col lg:flex-row space-x-10 mt-10">
          <div>
            <div className="font-bold text-[22px] text-text-body max-w-[613px]">
              Assurance and Assistance. De-risking and demonstrating best
              standards on your AI assets through 3rd-party conformity review
            </div>
            <div className="block lg:hidden">
              <StaticImage
                quality={100}
                src="../../images/ai-auditing.png"
                alt=""
                width={380}
              ></StaticImage>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14">
              <div className="flex justify-center">
                <HaiPlatformBullet textClass="text-text-base">
                  Governance and <br /> Technical Audit
                </HaiPlatformBullet>
              </div>
              <div className="flex justify-center">
                <HaiPlatformBullet textClass="text-text-base">
                  Provide ongoing Assurance and Assistance post-Audit
                </HaiPlatformBullet>
              </div>
              <div className="flex justify-center">
                <HaiPlatformBullet textClass="text-text-base">
                  Leading cross-sector <br /> reach and expertise
                </HaiPlatformBullet>
              </div>
              <div className="flex justify-center">
                <HaiPlatformBullet textClass="text-text-base">
                  Verified against applicable standards and regulations
                </HaiPlatformBullet>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:min-w-[448px] xl:min-w-[609px]">
            <div className="hidden lg:block xl:hidden">
              <StaticImage
                src="../../images/ai-auditing.png"
                alt=""
                quality={100}
                width={448}
              ></StaticImage>
            </div>
            <div className="hidden xl:block">
              <StaticImage
                src="../../images/ai-auditing.png"
                alt=""
                quality={100}
              ></StaticImage>
            </div>
          </div>
        </div>
      </HaiContainer>
    </section>
  );
}
