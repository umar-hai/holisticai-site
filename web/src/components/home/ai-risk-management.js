import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Title from "../../title";
import HaiContainer from "../hai-container";
import HaiPlatformBullet from "./hai-platform-bullet";

export default function AiRiskManagement() {
  return (
    <section className="bg-light">
      <HaiContainer>
        <Title classNames="text-base-blue" dividerColor="border-base-purple">
          AI Risk Management
        </Title>
        <div className="mt-10 text-[22px] font-bold max-w-[687px]">
          Enterprise-grade management of your AI assets risks, ensuring adoption
          is done in a safe, legal, and ethical manner
        </div>
        <div className="flex space-x-8">
          <div className="flex-1">
            <div>
              <StaticImage
                src="../../images/ai-risk-management.png"
                alt=""
                quality={100}
              ></StaticImage>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-8">
              <HaiPlatformBullet textClass="text-text-body">
                Protect from reputational and financial damage
              </HaiPlatformBullet>
              <HaiPlatformBullet textClass="text-text-body">
                Assess your systems efficacy and robustness levels
              </HaiPlatformBullet>
              <HaiPlatformBullet textClass="text-text-body">
                Get compliant by-design to ever-coming regulations and standards
              </HaiPlatformBullet>
              <HaiPlatformBullet textClass="text-text-body">
                Improve systems Transparency, and Mitigate eventual Bias risks
              </HaiPlatformBullet>
            </div>
          </div>
        </div>
      </HaiContainer>
    </section>
  );
}
