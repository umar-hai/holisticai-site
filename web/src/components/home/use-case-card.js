import * as React from "react";

export default function UseCaseCard({ title, children }) {
  return (
    <div className="w-auto lg:max-w-[597px] h-auto lg:h-[151px] shadow-hai p-6 rounded-2xl flex flex-col space-y-1 text-white bg-inactive-blue bg-opacity-10">
      <div className="font-bold text-[22px]">{title}</div>
      <div className="font-roboto">{children}</div>
    </div>
  );
}
