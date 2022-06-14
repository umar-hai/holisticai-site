import * as React from "react";
import Title from "../../title";
import HaiContainer from "../hai-container";
import Metric from "../metric";

export default function ImpactAi() {
  return (
    <section className="bg-light">
      <HaiContainer>
        <Title
          classNames="text-base-blue lg:w-[790px]"
          dividerColor="border-base-purple"
        >
          Impacting AI Deployment and Research at Scale
        </Title>
        <div className="mt-10 font-roboto text-text-body">
          Holistic AI is commited to create a Responsible AI ecosystem by
          working with regulators, policy-makers and engineers internationally
        </div>
        <div className="flex justify-center">
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 justify-center gap-3 flex-wrap">
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
      </HaiContainer>
    </section>
  );
}
