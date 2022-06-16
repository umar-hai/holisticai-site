import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Title from "../../title";
import HaiContainer from "../hai-container";

export default function FeaturedIn() {
  return (
    <section className="bg-white">
      <HaiContainer>
        <div className="flex justify-center flex-col items-center">
          <Title classNames="text-base-blue" dividerColor="border-base-purple">
            Featured in
          </Title>
        </div>
        <div className="mt-20 gap-10 xl:gap-0 flex flex-col xl:flex-row justify-between">
          <div>
            <Link
              className="flex justify-center"
              to="https://oecd.ai/fr/wonk/algorithm-auditing-trustworty-ai"
            >
              <StaticImage
                quality={100}
                // width={184}
                alt=""
                src="../../images/oecd-ai-logo.svg"
                backgroundColor="#3f3f3f"
              ></StaticImage>
            </Link>
          </div>
          <div>
            <Link
              className="flex justify-center"
              to="https://sloanreview.mit.edu/article/when-you-reject-people-tell-them-why/"
            >
              <StaticImage
                quality={100}
                // width={184}
                alt=""
                src="../../images/mit-sloan.png"
              ></StaticImage>
            </Link>
          </div>

          <div>
            <Link
              className="flex justify-center"
              to="https://www.technologyreview.com/2022/05/13/1052246/responsible-adoption-of-ai-in-a-cloud-environment/"
            >
              <StaticImage
                quality={100}
                alt=""
                src="../../images/mit-tech-review.svg"
              ></StaticImage>
            </Link>
          </div>

          <div>
            <Link
              className="flex justify-center"
              to="https://www.gov.uk/government/publications/the-roadmap-to-an-effective-ai-assurance-ecosystem/the-roadmap-to-an-effective-ai-assurance-ecosystem-extended-version"
            >
              <StaticImage
                quality={100}
                width={184}
                alt=""
                src="../../images/cdei.jpg"
              ></StaticImage>
            </Link>
          </div>

          <div>
            <Link
              className="flex justify-center"
              to="https://research.cisco.com/publication/6036c3c535f9c3d14ecceb23"
            >
              <StaticImage
                quality={100}
                width={184}
                alt=""
                src="../../images/cisco.png"
              ></StaticImage>
            </Link>
          </div>
        </div>
      </HaiContainer>
    </section>
  );
}
