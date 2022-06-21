import * as React from "react";
import { useState } from "react";
import JobLocation from "./job-location";
import ProseableText from "../prosable-text";

export default function MasterDetail({ data }) {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <>
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-4 xl:gap-9">
        <div className="select-none  flex flex-col space-y-6 sm:pr-0 pr-16">
          {data.map((d, i) => (
            <div
              className={` shadow-[0px_2px_7px_rgba(0,0,0,0.15)] border-l-[16px] cursor-pointer bg-white rounded-xl p-6 text-base xl:text-xl font-bold w-full lg:w-[250px] xl:w-[380px] ${
                i === selectedId
                  ? "  text-base-blue border-l-base-purple"
                  : "border-l-stroke text-text-title"
              }`}
              key={i}
              onClick={() => setSelectedId(i)}
            >
              <div>{d.title}</div>
              <JobLocation></JobLocation>
            </div>
          ))}
        </div>
        <div className="p-16 bg-white shadow-[0px_2px_7px_rgba(0,0,0,0.15)] rounded-xl min-h-[1030px]">
          <div className="border-b border-[#c4c4c4] pb-6 mb-6">
            <h2 className="text-[32px] text-base-blue font-bold mt-2">
              {data[selectedId]?.title || ""}
            </h2>
            <JobLocation></JobLocation>
          </div>
          <ProseableText value={data[selectedId]?.detail || ""} />
        </div>
      </div>
    </>
  );
}
