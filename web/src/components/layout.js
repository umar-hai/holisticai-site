import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import Seo from "./seo";

export default function Layout({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <header>
        <Link to="/">{meta.title}</Link>
        <nav>
          <Link to="/blog">Blog</Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
