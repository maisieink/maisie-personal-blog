module.exports = {
  siteMetadata: {
    title: "Daniel Johnson's personal blog",
    description: "thoughts about software development and javascript",
    author: "Daniel Johnson",
    firstName: "Daniel",
    lastName: "Johnson",
    shortDescription: "daniel's blog with thoughts & things",
    twitterUrl: "https://twitter.com/daniel00johnson",
    githubUrl: "https://github.com/danielj41",
    portfolioUrl: "https://danieljohnson.io",
  },
  plugins: [
    // metadata plugins
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Daniel Johnson's personal blog",
        short_name: "Daniel Johnson",
        start_url: "/",
        background_color: "#d5f0f8",
        theme_color: "#dbf8dd",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-react-helmet",

    // performance plugins
    "gatsby-plugin-catch-links",

    // styling plugins
    "gatsby-plugin-dark-mode",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },

    // markdown blog post plugins
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-remark-copy-linked-files",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 760,
              backgroundColor: "var(--body-background-color)",
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
          },
          {
            resolve: "gatsby-remark-custom-blocks",
            options: {
              blocks: {
                screenshot: {
                  classes: "screenshot",
                  title: "optional",
                },
              },
            },
          },
        ],
      },
    },
  ],
};
