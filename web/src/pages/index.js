import React from "react";
import FeaturedIn from "../components/home/featured-in";
import HaiPlatform from "../components/home/hai-platform";
import ImpactAi from "../components/home/impact-ai";
import UseCasesOverview from "../components/home/use-cases-overview";
import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout>
      <ImpactAi></ImpactAi>
      <UseCasesOverview></UseCasesOverview>
      <FeaturedIn></FeaturedIn>
      <HaiPlatform></HaiPlatform>
    </Layout>
  );
}
