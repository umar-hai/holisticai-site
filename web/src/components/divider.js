import * as React from "react";

export default function Divider({ color }) {
  return (
    <div
      className={`w-[114px] h-0 border-[3px] ${color || "border-white"}`}
    ></div>
  );
}
