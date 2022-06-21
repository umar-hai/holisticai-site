import * as React from "react";
import Title from "../../title";
import HaiContainer from "../hai-container";

export default function OurTeam() {
  return (
    <section className="bg-dark">
      <HaiContainer>
        <div className="flex justify-center flex-col items-center">
          <Title classNames="text-white" dividerColor="purple">
            Our Team
          </Title>
        </div>
      </HaiContainer>
    </section>
  );
}
