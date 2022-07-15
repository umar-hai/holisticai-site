import * as React from "react";

export default function PaperInfo({ title, subtitle }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="font-bold text-[22px]">{title}</div>
      <div className="text-text-secondary font-roboto">{subtitle}</div>
    </div>
  );
}
