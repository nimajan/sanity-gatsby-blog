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
                    "6174ed703dbcaf3aa07cad36",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-aqao77yi",
                  apiId: "fe1430b9-6e37-4356-8f33-0735ff63d2a5",
                },
                {
                  buildHookId: "6174ed70b84e30d791454254",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-oxkfhsbr",
                  apiId: "d6abfb4d-7431-4456-a6f5-8a76a37d51db",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/nimajan/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-oxkfhsbr.netlify.app",
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
