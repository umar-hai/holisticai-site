import { graphql } from "gatsby";
import BlogPost from "../components/blog-post";
import React from "react";
import Layout from "../components/layout";
import { toPlainText } from "../lib/helpers";
import HeroSecondary from "../components/header/hero-secondary";

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
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

const BlogPostTemplate = (props) => {
  const { data, errors } = props;
  const post = data && data.post;
  return (
    <Layout
      title={`Holistic AI - ${post.title || "Untitled"}`}
      description={toPlainText(post._rawExcerpt)}
    >
      {{
        hero: <HeroSecondary>{{ title: "Blog Post" }}</HeroSecondary>,
        main: post && <BlogPost {...post} />,
      }}
    </Layout>
  );
};

export default BlogPostTemplate;
