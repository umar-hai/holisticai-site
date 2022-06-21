import * as React from "react";
import HaiContainer from "../hai-container";
import Title from "../../title";
import MissionIconText from "./mission-icon-text";
import { StaticImage } from "gatsby-plugin-image";

export default function SolvingTrust() {
  return (
    <section className="bg-dark">
      <HaiContainer>
        <div className="flex justify-center flex-col items-center">
          <Title classNames="text-white " dividerColor="purple">
            Solving Trust <br className="lg:hidden" /> in AI
          </Title>
        </div>
        <div className="text-inactive-blue flex mt-10">
          <div className="max-w-[475px] mx-auto text-center font-roboto">
            To deliver our <span className="font-bold">mission</span>, we employ
            our practical knowledge and academic excellence in three different
            directions
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="mt-7 flex flex-col items-center sm:gap-6 lg:flex-row lg:space-x-20 justify-center">
            <MissionIconText
              title="Embedding Ethics in AI"
              text="By pursuing Foundational Research, we aim to embed in systems attitudes and practices that by-design make these systems compliant to certain standards, regulations or expectations"
            >
              <StaticImage
                alt=""
                quality={100}
                src="../../images/embed-ethics.png"
              ></StaticImage>
            </MissionIconText>
            <div className="hidden xl:flex h-[363px]  items-end">
              <MissionIconText
                title="Demonstrable Trust"
                text="By pursuing Applied Research, our goal is to create new metrics, methods, and processes that can improve system verification and mitigation "
              >
                <StaticImage
                  alt=""
                  quality={100}
                  src="../../images/trust.png"
                ></StaticImage>
              </MissionIconText>
            </div>
            <MissionIconText
              title="Scaling Trusted Practices "
              text="By pursuing Engineering Excellence, we aim to make all our methods, research and practices affordable and easy-to-use. This is part of our commitment to build a global ecosystem of trust "
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
              title="Demonstrable Trust"
              text="By pursuing Applied Research, our goal is to create new metrics, methods, and processes that can improve system verification and mitigation "
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
