import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Title from "../../title";
import HaiContainer from "../hai-container";
import HaiPlatformBullet from "./hai-platform-bullet";

export default function AiAuditing() {
  return (
    <section className="bg-white">
      <HaiContainer>
        <Title classNames="text-base-blue" dividerColor="border-base-purple">
          AI Auditing
        </Title>
        <div className="flex space-x-10 mt-10">
          <div>
            <div className="font-bold text-[22px] text-text-body max-w-[613px]">
              Assurance and Assistance. De-risking and demonstrating best
              standards on your AI assets through 3rd-party conformity review
            </div>
            <div className="grid grid-cols-2 gap-8 mt-14">
              <HaiPlatformBullet textClass="text-text-base">
                Governance and <br /> Technical Audit
              </HaiPlatformBullet>
              <HaiPlatformBullet textClass="text-text-base">
                Provide ongoing Assurance and Assistance post-Audit
              </HaiPlatformBullet>
              <HaiPlatformBullet textClass="text-text-base">
                Leading cross-sector <br /> reach and expertise
              </HaiPlatformBullet>
              <HaiPlatformBullet textClass="text-text-base">
                Verified against applicable standards and regulations
              </HaiPlatformBullet>
            </div>
          </div>
          <div className="min-w-[609px]">
            <div>
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
