import { Link } from "gatsby";
import * as React from "react";

export default function CarouselItem({ children }) {
  return (
    <div className="inline-flex items-center justify-center w-full h-[277px] py-3">
      {children}
    </div>
  );
}
