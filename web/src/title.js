import * as React from "react";

export default function Title({ children, textColor }) {
  return (
    <h1
      className={`${textColor} font-bold text-[64px] w-[624px] leading-[65px] mb-10`}
    >
      <div>{children}</div>
    </h1>
  );
}
