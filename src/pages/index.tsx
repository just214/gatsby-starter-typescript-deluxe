import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

const App = () => (
  <Layout>
    <SEO />
    <code
      css={`
        display: inline-block;
        color: ${props => props.theme.blue};
        font-size: 1.5rem;
        background: #f5f5f5;
        margin-top: 40px;
        border-radius: 5px;
        padding: 10px;
        @media (max-width: 800px) {
          font-size: 1rem;
        }
        ::before {
          content: "$ ";
        }
      `}
    >
      gatsby new my-app
      https://github.com/gojutin/gatsby-starter-typescript-deluxe
    </code>
  </Layout>
);

export default App;
