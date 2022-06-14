import * as React from "react";

export default function MissionIconText({ children, title, text }) {
  return (
    <div className="max-w-[307px]">
      <div className="flex justify-center">{children}</div>
      <div className="text-center text-white font-bold text-[22px] mt-5">
        {title}
      </div>
      <div className="mt-3 text-center font-roboto text-inactive-blue">
        {text}
      </div>
    </div>
  );
}
