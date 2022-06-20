import * as React from "react";
import HaiContainer from "../hai-container";
import { graphql, useStaticQuery } from "gatsby";
import MasterDetail from "./master-detail";

export default function OpenPositions() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allSanityJobOpening {
        nodes {
          jobTitle
          _rawJobDescription
        }
      }
    }
  `);

  const jobs = data.allSanityJobOpening.nodes;

  return (
    <section id="open-positions" className="bg-light">
      <HaiContainer>
        <MasterDetail
          data={jobs.map((job) => ({
            title: job.jobTitle,
            detail: job._rawJobDescription,
          }))}
        ></MasterDetail>
      </HaiContainer>
    </section>
  );
}
