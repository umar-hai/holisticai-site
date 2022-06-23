import * as React from "react";
import Title from "../../title";
import HaiContainer from "../hai-container";
import CoverageCarousel from "./coverage-carousel";
import IntegrationCarousel from "./integration-carousel";

export default function IntegrationsAndCoverage() {
  return (
    <section className="bg-white">
      <HaiContainer>
        <div>
          <div className="flex justify-center flex-col items-center">
            <Title classNames="text-base-blue" dividerColor="purple">
              Integrations and Coverage
            </Title>
          </div>
          <div className="flex flex-col gap-20 xl:gap-0 xl:flex-row justify-between xl:justify-around mt-16">
            <div>
              <IntegrationCarousel
                title="Integration"
                description="More and more integrations every day!"
              ></IntegrationCarousel>
            </div>
            <div>
              <CoverageCarousel
                title="Coverage"
                description="Tracking and productionizing the evolving landscape!"
              ></CoverageCarousel>
            </div>
          </div>
        </div>
      </HaiContainer>
    </section>
  );
}
