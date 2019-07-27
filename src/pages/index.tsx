import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const App = () => (
  <Layout>
    <SEO title="Home" keywords={[`neutron`, `proton`, `quark`, `physics`]} />

    <code
      css={`
        background: #333;
        color: white;
        padding: 10px 20px;
        border-radius: 10px;
        font-size: 1.2vw;
        @media (max-width: 800px) {
          font-size: 1.8vw;
        }
      `}
    >
      gatsby new my-app
      https://github.com/gojutin/gatsby-starter-typescript-deluxe.git
    </code>
  </Layout>
);

export default App;
