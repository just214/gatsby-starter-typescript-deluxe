module.exports = {
  siteMetadata: {
    title: `gatsby-starter-typescript-deluxe`,
    description: `A Gatsby starter with TypeScript, Storybook, Styled Components, Framer Motion, Jest, and more.`,
    author: `@gojutin`,
    url: "https://gatsby-starter-typescript-deluxe.netlify.com",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-plugin-react-axe",
      options: {
        showInProduction: false,
        // Options to pass to axe-core.
        // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
        axeOptions: {
          // Your axe-core options.
        },
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
        description: `A Gatsby starter with TypeScript, Storybook, Styled Components, Framer Motion, Jest, and more.`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: "src/images/icon.png",
        icons: [
          {
            src: "icons/icon_512x512.png",
            sizes: "512x512",
            types: "image/png",
          },
          {
            src: "icons/icon_192x192.png",
            sizes: "192x192",
            types: "image/png",
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
