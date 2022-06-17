import * as React from "react";
import HaiContainer from "../hai-container";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../../lib/helpers";
import { Link } from "gatsby";
import BlogPostPreviewCard from "./blog-post-preview-card";

export default function BlogList({ data }) {
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  return (
    <section className="bg-light">
      <HaiContainer>
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
          <div>
            <div className="text-text-title text-[22px] font-bold mb-12">
              Search
            </div>
            <form className="bg-white shadow-[0_2px_7px_rgba(0,0,0,0.15)] h-16 w-[417px] rounded-[80px] p-0 outline-base-blue">
              <input
                type="text"
                className="appearance-none bg-transparent outline-none p-6 pr-14 w-full h-full bg-search bg-no-repeat bg-right"
                style={{ backgroundPositionX: "364px" }}
              />
            </form>
          </div>
          <div>
            <div className="text-text-title text-[22px] font-bold mb-10">
              All Blog Posts
            </div>
            {postNodes && (
              <div className="inline-block">
                <div className="gap-x-2 gap-y-7 grid grid-cols-2">
                  {postNodes &&
                    postNodes.map((node) => (
                      <div key={node.id}>
                        <BlogPostPreviewCard {...node} isInList />
                      </div>
                    ))}
                </div>
                {
                  <div>
                    <Link to="/archive/">Browse more</Link>
                  </div>
                }
              </div>
            )}
          </div>
        </div>
      </HaiContainer>
    </section>
  );
}
