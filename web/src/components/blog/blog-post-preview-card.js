import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { buildImageObj, getBlogUrl } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import { format } from "date-fns";

export default function BlogPostPreviewCard(props) {
  return (
    <Link to={getBlogUrl(props.publishedAt, props.slug.current)}>
      <div className="h-full max-w-full lg:max-w-[293px] shadow-hai p-5 rounded-2xl bg-white bg-opacity-40 flex-col flex group hover:bg-opacity-100 hover:scale-[1.01] transition-all">
        <div className="flex gap-1 items-center">
          <div className="flex">
            <StaticImage
              quality={100}
              src="../../images/grid-view-solid.png"
              alt=""
            ></StaticImage>
          </div>
          {props.categories && (
            <div className="font-roboto text-text-secondary">
              {props.categories
                .slice(0, 2)
                .map((category) => category.title)
                .join(",")}
            </div>
          )}
        </div>
        <div className="mt-3">
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .auto("format")
              .url()}
            alt={props.mainImage.alt}
            className="rounded-md"
          />
        </div>
        <div className="flex-1 font-bold text-[22px] mt-5 text-text-title group-hover:text-base-blue">
          {props.title}
        </div>
        <div className="border-t border-t-stroke flex justify-between font-roboto text-sm font-semibold text-text-secondary items-center pt-1 mt-6">
          <div>{props.authors.slice(0, 1).map((a) => a.author.name)}</div>
          <div>{format(new Date(props.publishedAt), "MMMM Mo, yyyy")}</div>
        </div>
      </div>
    </Link>
  );
}
