import { graphql } from "gatsby";
import ResearchPaper from "../components/research-paper";
import React from "react";
import Layout from "../components/layout";
import { toPlainText } from "../lib/helpers";
import BookCall from "../components/home/book-call";
import Footer from "../components/footer";

export const query = graphql`
  query ResearchPaperTemplateQuery($id: String!) {
    paper: sanityPaper(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        ...SanityImage
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
      authors {
        _key
        author {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
      }
    }
  }
`;

const ResearchPaperTemplate = (props) => {
  const { data, errors } = props;
  const post = data && data.paper;
  return (
    <Layout
      title={`Holistic AI - ${post.title || "Untitled"}`}
      description={toPlainText(post._rawExcerpt)}
    >
      {{
        main: post && (
          <>
            <ResearchPaper {...post} />
            <BookCall></BookCall>
            <Footer></Footer>
          </>
        ),
      }}
    </Layout>
  );
};

export default ResearchPaperTemplate;
