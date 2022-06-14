import * as React from "react";

export default function ContactIconInfo({ children, type, value }) {
  return (
    <div className="w-[150px]">
      <div className="flex justify-center">{children}</div>
      <div className="text-center text-[22px] text-white font-bold mt-5">
        {type}
      </div>
      <div className="text-center font-roboto text-white mt-5">{value}</div>
    </div>
  );
}
