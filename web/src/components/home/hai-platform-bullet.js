import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

export default function HaiPlatformBullet({ text, textClass }) {
  return (
    <div className="w-[219px] flex flex-col text-center space-y-2">
      <div>
        <StaticImage src="../../images/logo-symbol.png"></StaticImage>
      </div>
      <div className={`${textClass}`}>{text}</div>
    </div>
  );
}
