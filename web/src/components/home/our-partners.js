import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Title from "../../title";
import HaiContainer from "../hai-container";

export default function OurPartners() {
  return (
    <section className="bg-white">
      <HaiContainer>
        <div className="flex justify-center flex-col items-center">
          <Title classNames="text-base-blue" dividerColor="border-base-purple">
            Our Partners
          </Title>
        </div>
        <div className="mt-20 flex justify-between">
          <StaticImage alt="" src="../../images/jiggle.png"></StaticImage>
          <StaticImage alt="" src="../../images/jiggle.png"></StaticImage>
          <StaticImage alt="" src="../../images/jiggle.png"></StaticImage>
          <StaticImage alt="" src="../../images/jiggle.png"></StaticImage>
          <StaticImage alt="" src="../../images/jiggle.png"></StaticImage>
        </div>
      </HaiContainer>
    </section>
  );
}
