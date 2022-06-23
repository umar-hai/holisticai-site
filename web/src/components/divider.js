import * as React from "react";

export default function Divider({ color }) {
  return (
    <div
      className={`w-[114px] h-0 border-[3px] ${
        color || "bg-white border-white"
      } rounded-3xl`}
    ></div>
  );
}
