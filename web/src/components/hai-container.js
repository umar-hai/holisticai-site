import * as React from "react";

export default function HaiContainer({ children }) {
  return (
    <div className="container mx-auto px-6 lg:px-8 xl:px-28 py-16 ">
      {children}
    </div>
  );
}
