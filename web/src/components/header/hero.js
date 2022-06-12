import * as React from "react";
import Divider from "../divider";

export default function Hero() {
  return (
    <header className="h-[760px] max-h-[760px] bg-base-purple">
      <div className="container mx-auto px-28 pt-5 pb-20">
        <h1>Global Leaders in AI Risk Management</h1>
        <Divider />
      </div>
    </header>
  );
}
