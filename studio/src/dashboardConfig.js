export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62a1e79eab9f437257d791ee",
                  title: "Sanity Studio",
                  name: "holisticai-site-studio",
                  apiId: "0e1e9c2e-0cd1-4a5e-b7b6-10a48c9f6be3",
                },
                {
                  buildHookId: "62a1e79e2c6b3577ad5d6e37",
                  title: "Blog Website",
                  name: "holisticai-site",
                  apiId: "e2194763-34a7-42d0-b1d9-f26be5afedc3",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/umar-hai/holisticai-site",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://holisticai-site.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
