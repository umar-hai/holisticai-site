import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Carousel from "../carousel/carousel";
import CarouselItem from "../carousel/carouselItem";

function IntegrationCarouselItem({ children, link }) {
  return (
    <a href={link} target="_blank">
      <CarouselItem>
        <div className="flex w-[277px] h-[217px] shadow-hai rounded-2xl bg-white">
          <div className="m-auto w-[277px]">
            <div className="flex flex-col space-y-4 p-6 min-w-[277px]">
              <div className="flex justify-center items-center">{children}</div>
            </div>
          </div>
        </div>
      </CarouselItem>
    </a>
  );
}

export default function IntegrationCarousel({ title, description }) {
  return (
    <div className="flex flex-col  gap-6 xl:gap-14">
      <div className="font-bold text-text-secondary text-[22px]">
        <div className="text-center">{title}</div>
        <div className="text-center text-text-title">{description}</div>
      </div>
      <div className="max-w-[380px] lg:max-w-[560px] m-auto">
        <Carousel>
          <IntegrationCarouselItem link="https://scikit-learn.org/stable/">
            <StaticImage
              placeholder="blurred"
              alt=""
              src="../../images/scikit-learn-logo-small.png"
              height={65}
              quality={100}
            ></StaticImage>
          </IntegrationCarouselItem>
          <IntegrationCarouselItem link="https://pytorch.org/">
            <StaticImage
              placeholder="blurred"
              alt=""
              src="../../images/pytorch-logo.png"
              height={65}
              quality={100}
            ></StaticImage>
          </IntegrationCarouselItem>
          <IntegrationCarouselItem link="https://www.tensorflow.org/">
            <StaticImage
              placeholder="blurred"
              alt=""
              src="../../images/tensorflow.png"
              height={65}
              quality={100}
            ></StaticImage>
          </IntegrationCarouselItem>

          <IntegrationCarouselItem link="https://databricks.com/">
            <StaticImage
              placeholder="blurred"
              alt=""
              src="../../images/databricks.png"
              height={65}
              quality={100}
            ></StaticImage>
          </IntegrationCarouselItem>

          <IntegrationCarouselItem link="https://azure.microsoft.com/en-us/">
            <StaticImage
              placeholder="blurred"
              alt=""
              src="../../images/azure.png"
              height={65}
              quality={100}
            ></StaticImage>
          </IntegrationCarouselItem>
          <IntegrationCarouselItem link="https://aws.amazon.com/pm/sagemaker/">
            <StaticImage
              placeholder="blurred"
              alt=""
              src="../../images/sagemaker.png"
              height={65}
              quality={100}
            ></StaticImage>
          </IntegrationCarouselItem>
          <IntegrationCarouselItem link="https://h2o.ai/">
            <StaticImage
              placeholder="blurred"
              alt=""
              src="../../images/h2oai.png"
              height={65}
              quality={100}
            ></StaticImage>
          </IntegrationCarouselItem>
          <IntegrationCarouselItem link="https://xgboost.ai/">
            <StaticImage
              placeholder="blurred"
              alt=""
              src="../../images/xgboost.png"
              height={65}
              quality={100}
            ></StaticImage>
          </IntegrationCarouselItem>
          <IntegrationCarouselItem link="https://catboost.ai/">
            <StaticImage
              placeholder="blurred"
              alt=""
              src="../../images/catboost.png"
              height={65}
              quality={100}
            ></StaticImage>
          </IntegrationCarouselItem>
        </Carousel>
      </div>
    </div>
  );
}
