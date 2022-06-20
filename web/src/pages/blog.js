import React from "react";
import { graphql } from "gatsby";
import Footer from "../components/footer";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../components/layout";
import HeroSecondary from "../components/header/hero-secondary";
import BlogList from "../components/blog/blog-list";
import BookCall from "../components/home/book-call";

export const query = graphql`
  fragment SanityImage on SanityMainImage {
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

  query IndexPageQuery {
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
          categories {
            _id
            title
          }
          authors {
            author {
              name
            }
          }
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  return (
    <Layout>
      {{
        hero: (
          <HeroSecondary>
            {{
              title: "Blog",
            }}
          </HeroSecondary>
        ),
        main: (
          <>
            <BlogList data={data}></BlogList>
            <BookCall></BookCall>
            <Footer></Footer>
          </>
        ),
      }}
    </Layout>
  );
};

export default IndexPage;
