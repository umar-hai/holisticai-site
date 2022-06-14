import React from "react";
import AiAuditing from "../components/home/ai-auditing";
import AiRiskManagement from "../components/home/ai-risk-management";
import FeaturedIn from "../components/home/featured-in";
import HaiPlatform from "../components/home/hai-platform";
import ImpactAi from "../components/home/impact-ai";
import SolvingTrust from "../components/home/solving-trust";
import UseCasesOverview from "../components/home/use-cases-overview";
import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout>
      <ImpactAi></ImpactAi>
      <UseCasesOverview></UseCasesOverview>
      <FeaturedIn></FeaturedIn>
      <HaiPlatform></HaiPlatform>
      <AiRiskManagement></AiRiskManagement>
      <AiAuditing></AiAuditing>
      <SolvingTrust></SolvingTrust>
    </Layout>
  );
}
