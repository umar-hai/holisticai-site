import React from "react";
import {  Link } from "gatsby";

import Container from "../components/container";

import Layout from "../containers/layout";



export default function IndexPage(props) {
  

  return (
    <Layout>

      <Container>
        <h1 hidden>Welcome to Holistic AI</h1>
        <Link to="/blog">Blog</Link>
      </Container>
    </Layout>
  );
};

