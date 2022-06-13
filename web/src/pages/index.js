import React from "react";
import ImpactAi from "../components/home/impact-ai";
import UseCasesOverview from "../components/home/use-cases-overview";
import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout>
      <ImpactAi></ImpactAi>
      <UseCasesOverview></UseCasesOverview>
    </Layout>
  );
}
