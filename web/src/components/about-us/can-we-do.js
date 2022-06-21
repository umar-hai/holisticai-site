import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Title from "../../title";
import HaiContainer from "../hai-container";
import CanWeDoCard from "./can-we-do-card";

export default function CanWeDo() {
  return (
    <section className="bg-white">
      <HaiContainer>
        <div className="flex justify-center flex-col items-center">
          <Title classNames="text-base-blue" dividerColor="border-base-purple">
            What can we do for you
          </Title>
        </div>
        <div className="mt-20 flex justify-around">
          <CanWeDoCard
            title="Best-in-class AI Risk Management Processes"
            description="From mapping risks to verification, mitigation and monitoring– all at scale and enterprise level.
            "
          >
            <StaticImage
              src="../../images/best-in-class.png"
              alt=""
              quality={100}
            ></StaticImage>
          </CanWeDoCard>
          <CanWeDoCard
            title="Holistic Assessment across the AI Lifecycle"
            description="From Efficacy and Robustness, to Bias, Privacy and Explainability– all risks covered and managed across development.
            "
          >
            <StaticImage
              src="../../images/ai-lifecycle.png"
              alt=""
              quality={100}
            ></StaticImage>
          </CanWeDoCard>
          <CanWeDoCard
            title="Increase Trust"
            description="Embed ethics, align values and demonstrate trust to any audience by verification and controls
            "
          >
            <StaticImage
              src="../../images/increase-trust.png"
              alt=""
              quality={100}
            ></StaticImage>
          </CanWeDoCard>
        </div>
      </HaiContainer>
    </section>
  );
}
