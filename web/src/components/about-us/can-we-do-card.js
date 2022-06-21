import * as React from "react";

export default function CanWeDoCard({ title, description, children }) {
  return (
    <div className="flex flex-col gap-12 max-w-[320px]">
      <div className="flex justify-center">{children}</div>
      <div className="flex flex-col gap-5">
        <div className="text-text-title font-bold text-[22px] text-center">
          {title}
        </div>
        <div className="text-text-body font-roboto text-center">
          {description}
        </div>
      </div>
    </div>
  );
}
