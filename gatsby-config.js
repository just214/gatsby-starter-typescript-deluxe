module.exports = {
  siteMetadata: {
    title: `gatsby-starter-typescript-deluxe`,
    description: `A Gatsby starter with TypeScript, Storybook, Styled Components, and more.`,
    author: `gojutin`,
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
        name: `gatsby-starter-typescript-deluxe`,
        short_name: `gatsby-starter-typescript-deluxe`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
  ],
};
