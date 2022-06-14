import * as React from "react";

export default function HaiButton({ children }) {
  return (
    <button className="text-white text-[19px] w-[213px] font-semibold py-4 bg-base-blue rounded-lg hover:bg-[#4765d8]">
      {children}
    </button>
  );
}
