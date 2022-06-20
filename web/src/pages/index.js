import React from "react";
import Footer from "../components/footer";
import Hero from "../components/header/hero";
import AiAuditing from "../components/home/ai-auditing";
import AiRiskManagement from "../components/home/ai-risk-management";
import BookCall from "../components/home/book-call";
import FeaturedIn from "../components/home/featured-in";
import HaiPlatform from "../components/home/hai-platform";
import ImpactAi from "../components/home/impact-ai";
// import OurPartners from "../components/home/our-partners";
import SolvingTrust from "../components/home/solving-trust";
import UseCasesOverview from "../components/home/use-cases-overview";
import JoinHolistic from "../components/join-holistic";
import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout>
      {{
        hero: <Hero></Hero>,
        main: (
          <>
            <ImpactAi></ImpactAi>
            <UseCasesOverview></UseCasesOverview>
            <FeaturedIn></FeaturedIn>
            <HaiPlatform></HaiPlatform>
            <AiRiskManagement></AiRiskManagement>
            <AiAuditing></AiAuditing>
            <SolvingTrust></SolvingTrust>
            <JoinHolistic></JoinHolistic>
            {/* <OurPartners></OurPartners> */}
            <BookCall></BookCall>
            <Footer></Footer>
          </>
        ),
      }}
    </Layout>
  );
}
