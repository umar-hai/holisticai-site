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
        <div className="text-text-title text-[22px] font-bold">
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
      </HaiContainer>
    </section>
  );
}
