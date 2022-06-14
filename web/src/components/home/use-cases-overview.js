import * as React from "react";
import Title from "../../title";
import HaiContainer from "../hai-container";
import WidgetCard from "../widget-card";
import UseCaseCard from "./use-case-card";
import { StaticImage } from "gatsby-plugin-image";
import UseCaseClient from "./use-case-client";

export default function UseCasesOverview() {
  return (
    <section className="bg-dark">
      <HaiContainer>
        <Title classNames="text-white" dividerColor="border-base-purple">
          Better AI, Better for Everyone
        </Title>
        <div className="flex mt-10 space-x-10">
          <div className="flex-1">
            <div className="text-inactive-blue text-[22px]">
              Delivering value for leading enterprises in different sectors.
              Ensuring that any AI deployment is done in a Safe, Legal, and
              Ethical manner
            </div>
            <div className="mt-8">
              <div className="text-[22px] text-white">Some of our Clients</div>
              <div className="grid grid-cols-2 gap-y-4 mt-2">
                <UseCaseClient>
                  <StaticImage
                    src="../../images/starling.png"
                    alt="starling logo"
                  ></StaticImage>
                </UseCaseClient>
                <UseCaseClient>
                  <StaticImage
                    src="../../images/mindbridge.png"
                    alt="mindbridge logo"
                  ></StaticImage>
                </UseCaseClient>
                <UseCaseClient>
                  <StaticImage
                    src="../../images/hired.png"
                    alt="hired logo"
                  ></StaticImage>
                </UseCaseClient>
                <UseCaseClient>
                  <StaticImage
                    src="../../images/unilever.png"
                    alt="unilever logo"
                  ></StaticImage>
                </UseCaseClient>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4 flex flex-col justify-end">
            <UseCaseCard title="Enterprise-Grade AI Assurance">
              <div>
                Our auditing process allows your enterprise to adopt AI with
                confidence, minimize risk, optimise resource allocation and
                outcomes across the enterprise, and prepare for the wide-ranging
                implications of the EU AI Act
              </div>
            </UseCaseCard>
            <UseCaseCard title="Preparing for the NYC “Bias Audit” law">
              <div>
                Our best-in-class audit of your{" "}
                <span className="font-bold">
                  Automated Employment Decision Tool
                </span>{" "}
                ensures your compliance with incoming legislation. With our
                third-part assessment, get ready to be compliant in a fast,
                cost-effective, and easy to scale manner.​
              </div>
            </UseCaseCard>
            <UseCaseCard title="Third-party conformity assessment">
              <div>
                Our auditing process allows your enterprise to adopt AI with
                confidence, minimize risk, optimise resource allocation and
                outcomes across the enterprise, and prepare for the wide-ranging
                implications of the EU AI Act
              </div>
            </UseCaseCard>
          </div>
        </div>
      </HaiContainer>
    </section>
  );
}
