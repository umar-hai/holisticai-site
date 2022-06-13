import * as React from "react";
import WidgetCard from "./widget-card";

export default function Metric({ value, text }) {
  return (
    <WidgetCard>
      <div className="flex flex-col space-y-4 p-6">
        <div className="text-base-purple font-bold text-[64px] leading-[65px] text-center">
          {value}
        </div>
        <div className="text-center font-semibold text-text-body">{text}</div>
      </div>
    </WidgetCard>
  );
}
