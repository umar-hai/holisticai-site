import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

export default function JobLocation() {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex">
        <StaticImage alt="" src="../../images/pin.png"></StaticImage>
      </div>
      <div className="font-manrope text-text-primary font-normal text-base text-text-body">
        London /Remote
      </div>
    </div>
  );
}
