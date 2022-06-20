import * as React from "react";
import { useState } from "react";
import JobLocation from "./job-location";
import ProseableText from "../prosable-text";

export default function MasterDetail({ data }) {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <>
      <div className="flex flex-col space-x-0 lg:flex-row lg:space-x-9">
        <div className="select-none bg-white flex flex-col space-y-6 p-16 sm:shadow-none lg:shadow-[0px_0px_20px_rgba(132,132,132,0.2)]">
          {data.map((d, i) => (
            <div
              className={`cursor-pointer border border-[#c4c4c4] p-6 text-base xl:text-xl font-bold w-full lg:w-[250px] xl:w-[380px] ${
                i === selectedId
                  ? "bg-[#f4f4f4] border-l-4 border-l-[#582AB2]"
                  : ""
              }`}
              key={i}
              onClick={() => setSelectedId(i)}
            >
              <div>{d.title}</div>
              <JobLocation></JobLocation>
            </div>
          ))}
        </div>
        <div className="p-16 sm:shadow-none bg-white lg:shadow-[0px_0px_20px_rgba(132,132,132,0.2)] min-h-[1030px]">
          <div className="border-b border-[#c4c4c4] pb-6 mb-6">
            <h2 className="text-3xl font-bold">
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
