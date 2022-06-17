import * as React from "react";
import HaiContainer from "../hai-container";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../../lib/helpers";
import BlogPostPreview from "../blog-post-preview";
import { Link } from "gatsby";

export default function BlogList({ data }) {
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  return (
    <HaiContainer>
      {postNodes && (
        <div>
          <h2>Latest blog posts</h2>
          <ul>
            {postNodes &&
              postNodes.map((node) => (
                <li key={node.id}>
                  <BlogPostPreview {...node} isInList />
                </li>
              ))}
          </ul>
          {
            <div>
              <Link to="/archive/">Browse more</Link>
            </div>
          }
        </div>
      )}
    </HaiContainer>
  );
}
