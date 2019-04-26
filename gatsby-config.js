module.exports = {
  siteMetadata: {
    title: `gatsby starter`,
    description: `A starter library for building awesome React apps with Gatsby.`,
    author: `APS Physics`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `aps-gatsby-starter`,
        short_name: `aps-gatsby-starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/aps-logo.jpg`, // This path is relative to the root of the site.
      },
    },
  ],
};
