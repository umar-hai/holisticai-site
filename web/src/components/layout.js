import React from "react";
import Navbar from "./header/navbar";
import Seo from "./seo";

export default function Layout({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) {
  return (
    <>
      <Navbar></Navbar>
      <Seo title={title} description={description} image={image} path={path} />
      {children.hero}

      <main>{children.main}</main>
    </>
  );
}
