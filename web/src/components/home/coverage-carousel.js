import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Carousel from "../carousel/carousel";
import CarouselItem from "../carousel/carouselItem";

function IntegrationCarouselItem({ children, text, link }) {
  return (
    <CarouselItem>
      <a
        href={link}
        target="_blank"
        className="flex w-[277px] h-[217px] shadow-hai rounded-2xl bg-white"
      >
        <div className="m-auto w-[277px]">
          <div className="flex flex-col space-y-4 p-6 min-w-[277px]">
            <div className="flex justify-center items-center">{children}</div>

            <div className="h-[72px] whitespace-pre-line break-words text-center font-semibold text-text-body">
              {text}
            </div>
          </div>
        </div>
      </a>
    </CarouselItem>
  );
}

export default function CoverageCarousel({ title, description }) {
  return (
    <div className="flex flex-col gap-6 xl:gap-14">
      <div className="font-bold text-text-secondary text-[22px]">
        <div className="text-center">{title}</div>
        <div className="text-center text-text-title">{description}</div>
      </div>
      <div className="max-w-[380px] lg:max-w-[560px] m-auto">
        <Carousel>
          <IntegrationCarouselItem
            text="EU AI Act (Proposal)"
            link="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52021PC0206"
          >
            <StaticImage
              alt=""
              src="../../images/eurlex.svg"
              height={65}
              quality={100}
            ></StaticImage>
          </IntegrationCarouselItem>
          <IntegrationCarouselItem
            link="https://www.gov.uk/government/news/uk-government-publishes-pioneering-standard-for-algorithmic-transparency"
            text="UK AI Public Sector Standard"
          >
            <StaticImage
              alt=""
              src="../../images/gov.uk_logo.png"
              height={65}
              quality={100}
              backgroundColor="#000"
            ></StaticImage>
          </IntegrationCarouselItem>
          <IntegrationCarouselItem
            link="https://oecd.ai/en/dashboards/ai-principles/P9"
            text="OECD - AI Accountability Principle"
          >
            <StaticImage
              alt=""
              src="../../images/oecd.png"
              height={65}
              quality={100}
              backgroundColor="#000"
            ></StaticImage>
          </IntegrationCarouselItem>
          <IntegrationCarouselItem
            link="https://legistar.council.nyc.gov/LegislationDetail.aspx?ID=4344524&GUID=B051915D-A9AC-451E-81F8-6596032FA3F9&Options=Advanced&Search"
            text="New York City - Automated employment decision tools (Bias Audits)"
          >
            <StaticImage
              alt=""
              src="../../images/NYCC.png"
              height={65}
              quality={100}
            ></StaticImage>
          </IntegrationCarouselItem>
          <IntegrationCarouselItem
            link="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202120220AB1651"
            text="California - Worker rights: Workplace Technology Accountability Act (Proposal)"
          >
            <StaticImage
              alt=""
              src="../../images/california.png"
              height={65}
              quality={100}
            ></StaticImage>
          </IntegrationCarouselItem>
          <IntegrationCarouselItem
            link="https://www.congress.gov/bill/117th-congress/house-bill/6580/text?r=2&s=1"
            text="US Congress - Algorithmic Accountability Act of 2022 (Proposal)"
          >
            <StaticImage
              alt=""
              src="../../images/congress.png"
              height={65}
              quality={100}
            ></StaticImage>
          </IntegrationCarouselItem>
          <IntegrationCarouselItem
            link="https://ico.org.uk/media/2617219/guidance-on-the-ai-auditing-framework-draft-for-consultation.pdf"
            text="UK ICO Audit Framework"
          >
            <StaticImage
              alt=""
              src="../../images/ico.png"
              height={65}
              quality={100}
            ></StaticImage>
          </IntegrationCarouselItem>
          <IntegrationCarouselItem
            link="https://www.gov.uk/government/publications/the-roadmap-to-an-effective-ai-assurance-ecosystem"
            text="UK AI Assurance Roadmap"
          >
            <StaticImage
              alt=""
              src="../../images/gov.uk_logo.png"
              height={65}
              quality={100}
              backgroundColor="#000"
            ></StaticImage>
          </IntegrationCarouselItem>
        </Carousel>
      </div>
    </div>
  );
}
