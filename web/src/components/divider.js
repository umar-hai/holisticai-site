import * as React from "react";

export default function Divider({ color }) {
  const colorMap = {
    white: "white",
    purple: "base-purple",
    blue: "base-blue",
  };

  const displayColor = color ? colorMap[color] || "white" : "white";

  const prepends = ["border-", "bg-"];

  const colorStyles = prepends.map((x) => `${x}${displayColor}`).join(" ");

  return (
    <div
      className={`w-[114px] h-0 border-[3px] ${colorStyles} rounded-3xl`}
    ></div>
  );
}
