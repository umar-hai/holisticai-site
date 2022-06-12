import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

export default function CheckItem({ text }) {
  return (
    <div className="flex space-x-4 items-center font-roboto text-white font-semibold">
      <StaticImage src="../images/check.png" alt="check"></StaticImage>
      <div>{text}</div>
    </div>
  );
}
