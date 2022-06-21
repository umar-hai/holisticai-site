import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Title from "../../title";
import HaiContainer from "../hai-container";
import MissionIconText from "../home/mission-icon-text";

export default function StandOut() {
  return (
    <section className="bg-dark">
      <HaiContainer>
        <div className="flex justify-center flex-col items-center">
          <Title classNames="text-white " dividerColor="border-base-purple">
            What makes use stand out
          </Title>
        </div>

        <div className="flex flex-col gap-6">
          <div className="mt-7 flex flex-col items-center sm:gap-6 lg:flex-row lg:space-x-20 justify-center">
            <MissionIconText
              title="Mission"
              text="We enable organisations to deploy and embrace AI with greater confidence and effectiveness in its intended purpose."
            >
              <StaticImage
                alt=""
                quality={100}
                src="../../images/embed-ethics.png"
              ></StaticImage>
            </MissionIconText>
            <div className="hidden xl:flex h-[363px]  items-end">
              <MissionIconText
                title="Solution"
                text="Our solution provides insight, assessment and mitigation of AI risk."
              >
                <StaticImage
                  alt=""
                  quality={100}
                  src="../../images/trust.png"
                ></StaticImage>
              </MissionIconText>
            </div>
            <MissionIconText
              title="Purpose"
              text="Our purpose is to reduce the harm that can result from AI. We are increasing trust in the use of AI at scale."
            >
              <StaticImage
                alt=""
                quality={100}
                src="../../images/scaling.png"
              ></StaticImage>
            </MissionIconText>
          </div>
          <div className="xl:hidden flex justify-center">
            <MissionIconText
              title="Solution"
              text="Our solution provides insight, assessment and mitigation of AI risk."
            >
              <StaticImage
                alt=""
                quality={100}
                src="../../images/trust.png"
              ></StaticImage>
            </MissionIconText>
          </div>
        </div>
      </HaiContainer>
    </section>
  );
}
