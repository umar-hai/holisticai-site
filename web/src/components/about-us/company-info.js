import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import HaiContainer from "../hai-container";
import Metric from "../metric";

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

          <div className="flex justify-center mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 justify-center gap-3 flex-wrap">
              <Metric
                value="10k+"
                text="Systems covered in more 
than 20 jurisdictions"
              ></Metric>
              <Metric
                value="1k+"
                text="Technical and Governance 
            risk mitigations deployed"
              ></Metric>
              <Metric
                value="100+"
                text="Audits and Assurance 
            of AI Projects"
              ></Metric>
              <Metric
                value="50+"
                text="Research Papers in AI Safety, Ethics, and Governance"
              ></Metric>
            </div>
          </div>
        </div>
      </HaiContainer>
    </section>
  );
}
