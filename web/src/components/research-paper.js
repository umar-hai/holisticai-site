import * as styles from "./blog-post.module.css";
import { differenceInDays, formatDistance, format } from "date-fns";
import AuthorList from "./author-list";
import Container from "./container";
import PortableText from "./portableText";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import HaiContainer from "./hai-container";
import BlogInfo from "./blog/blog-info";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import ProseableText from "./prosable-text";

function ResearchPaper(props) {
  const { _rawBody, authors, categories, title, mainImage, publishedAt } =
    props;

  return (
    <article>
      <HaiContainer>
        <Container>
          <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between pb-9 border-b">
            <BlogInfo
              title="Written by"
              subtitle={authors?.slice(0, 1).map((x) => x.author.name) || ""}
            ></BlogInfo>
            <BlogInfo
              title="Category"
              subtitle={
                categories
                  ?.slice(0, 2)
                  ?.map((category) => category.title)
                  ?.join(",") || ""
              }
            ></BlogInfo>

            <BlogInfo
              title="Date"
              subtitle={
                differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? formatDistance(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), "MMMM Mo, yyyy")
              }
            ></BlogInfo>
          </div>

          <div className="my-9 text-base-blue font-bold text-[38px] text-center">
            {title}
          </div>
          {mainImage && mainImage.asset && (
            <div className="mb-9 flex">
              <img
                src={imageUrlFor(buildImageObj(mainImage))
                  .width(600)
                  .height(Math.floor((9 / 16) * 600))
                  .fit("crop")
                  .auto("format")
                  .url()}
                alt={mainImage.alt}
                className="mx-auto"
              />
            </div>
          )}
          <div className={styles.grid}>
            <div className={styles.mainContent}>
              <div className="lg:flex lg:justify-center">
                {_rawBody && <ProseableText value={_rawBody} />}
              </div>
            </div>
          </div>
          <div className="pt-9 border-t">
            <Link className="font-bold text-base-blue text-[22px]" to="/papers">
              <div className="flex items-center gap-3">
                <StaticImage
                  src="../images/left.png"
                  alt=""
                  quality={100}
                ></StaticImage>
                <span>Back to Papers Home</span>
              </div>
            </Link>
          </div>
        </Container>
      </HaiContainer>
    </article>
  );
}

export default ResearchPaper;
