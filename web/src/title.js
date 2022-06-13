import * as React from "react";

export default function Title({ children, classNames }) {
  return (
    <h1
      className={`${classNames} font-bold text-[64px] leading-[65px] mb-10 w-100`}
    >
      <div>{children}</div>
    </h1>
  );
}
