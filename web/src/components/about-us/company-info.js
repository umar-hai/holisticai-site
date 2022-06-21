import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import HaiContainer from "../hai-container";

export default function CompanyInfo() {
  return (
    <section className="bg-light">
      <HaiContainer>
        <div className="flex flex-col items-center">
          <div className="flex justify-center">
            <StaticImage
              alt=""
              src="../../images/logo-symbol.png"
              quality={100}
            ></StaticImage>
          </div>
          <div className="flex flex-col justify-center items-center gap-8 font-roboto mt-16 max-w-[573px]">
            <div>
              Holistic AI is enabling organisations to embrace AI with greater
              confidence and effectiveness. Assess and manage Safety, Ethical
              and Legal risks coming from: Data, models and processes.
            </div>
            <div>
              Holistic AI is commited to create a Responsible AI ecosystem by
              working with regulators, policy-makers and engineers
              internationally. No matter at which maturity stage and scale,
              Holistic AI has a solution for you.
            </div>
          </div>
        </div>
      </HaiContainer>
    </section>
  );
}
