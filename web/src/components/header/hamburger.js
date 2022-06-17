import * as React from "react";

export default function Hamburger({ open }) {
  return (
    <div
      className={` transition-all bg-white w-[30px] h-[3px] relative self-center before:w-[30px] before:h-[3px] before:bg-white before:content-[""] before:absolute before:top-[-10px] after:w-[30px] after:h-[3px] after:bg-white after:content-[""] after:absolute after:top-[10px] ${
        open
          ? "-rotate-45 before:-rotate-90 before:translate-y-[10px]  after:rotate-90 after:opacity-0"
          : ""
      }`}
    ></div>
  );
}
