import * as React from "react";
import ButtonLink from "../button-link";
import HaiContainer from "../hai-container";

export default function BookCall() {
  return (
    <section className="transition-all duration-500 ease-in-out bg-base-blue pointer-events-none hover:bg-base-purple">
      <HaiContainer>
        <div className="text-center text-white font-bold text-[32px]">
          Interested in our company?
        </div>
        <div className="h-[61px] mt-5 flex justify-center">
          <ButtonLink
            groupClass="min-w-[220px]"
            link="/contact"
            text="Book an intro call"
          ></ButtonLink>
        </div>
      </HaiContainer>
    </section>
  );
}
