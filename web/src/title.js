import * as React from "react";
import Divider from "./components/divider";

export default function Title({ children, classNames, dividerColor }) {
  return (
    <>
      <h1
        className={`${classNames} font-bold text-[64px] leading-[65px] mb-10 w-100`}
      >
        <div>{children}</div>
      </h1>

      <Divider color={dividerColor}></Divider>
    </>
  );
}
