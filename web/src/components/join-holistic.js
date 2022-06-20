import * as React from "react";
import ButtonLink from "./button-link";
import HaiContainer from "./hai-container";

export default function JoinHolistic() {
  return (
    <section className="bg-dark bg-opacity-80 pointer-events-none hover:bg-opacity-100">
      <HaiContainer>
        <div className="text-center text-white font-bold text-[32px]">
          Want to be part of our mission?
        </div>
        <div className="h-[61px] mt-5 flex justify-center">
          <ButtonLink
            groupClass="min-w-[190px]"
            link="/careers"
            text="Join Holistic AI"
          ></ButtonLink>
        </div>
      </HaiContainer>
    </section>
  );
}
