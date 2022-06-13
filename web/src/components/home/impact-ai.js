import * as React from "react";
import Title from "../../title";
import HaiContainer from "../hai-container";

export default function ImpactAi() {
  return (
    <section className="bg-light">
      <HaiContainer>
        <Title
          classNames="text-base-blue w-[790px]"
          dividerColor="border-base-purple"
        >
          Impacting AI Deployment and Research at Scale
        </Title>
        <div className="mt-10 font-roboto text-text-body">
          Holistic AI is commited to create a Responsible AI ecosystem by
          working with regulators, policy-makers and engineers internationally
        </div>
      </HaiContainer>
    </section>
  );
}
