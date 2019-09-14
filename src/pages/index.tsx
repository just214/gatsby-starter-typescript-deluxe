import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

const App = () => (
  <Layout>
    <SEO />
    <hr />
    <h3>Getting Started</h3>
    <code
      css={`
        color: ${props => props.theme.blue};
        padding: 10px 0px;
        font-size: 1.2rem;
        @media (max-width: 800px) {
          font-size: 1rem;
        }
      `}
    >
      gatsby new my-app
      https://github.com/gojutin/gatsby-starter-typescript-deluxe
    </code>
  </Layout>
);

export default App;
