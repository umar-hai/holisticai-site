import * as React from "react";
import OpenPositions from "../components/careers/open-positions";
import HeroSecondary from "../components/header/hero-secondary";
import Layout from "../components/layout";

export default function Careers() {
  return (
    <Layout>
      {{
        hero: <HeroSecondary>{{ title: "Careers" }}</HeroSecondary>,
        main: <OpenPositions></OpenPositions>,
      }}
    </Layout>
  );
}
