import * as React from "react";
import Divider from "./components/divider";

export default function Title({ children, classNames, dividerColor }) {
  return (
    <>
      <h1
        className={`${classNames} text-center lg:text-left font-bold text-5xl lg:text-[64px] lg:leading-[65px] mb-10 w-100`}
      >
        <div>{children}</div>
      </h1>

      <div className="flex justify-center lg:block">
        <Divider color={dividerColor}></Divider>
      </div>
    </>
  );
}
