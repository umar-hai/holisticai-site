import * as React from "react";
import CanWeDo from "../components/about-us/can-we-do";
import CompanyInfo from "../components/about-us/company-info";
import OurTeam from "../components/about-us/our-team";
import StandOut from "../components/about-us/stand-out";
import Footer from "../components/footer";
import HeroSecondary from "../components/header/hero-secondary";
import BookCall from "../components/home/book-call";
import Layout from "../components/layout";

export default function AboutUs() {
  return (
    <Layout>
      {{
        hero: (
          <HeroSecondary>
            {{
              title: "About us",
            }}
          </HeroSecondary>
        ),
        main: (
          <>
            <CompanyInfo></CompanyInfo>
            <CanWeDo></CanWeDo>
            <StandOut></StandOut>
            {/* <OurTeam></OurTeam> */}
            <BookCall></BookCall>
            <Footer></Footer>
          </>
        ),
      }}
    </Layout>
  );
}
