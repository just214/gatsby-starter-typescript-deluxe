import React from "react";
import Layout from "../components/layout";
import tw from "tailwind.macro";
import SEO from "../components/seo";

const App = () => (
  <Layout>
    <SEO title="Home" keywords={[`neutron`, `proton`, `quark`, `physics`]} />

    <code
      css={`
        ${tw`p-4 text-teal`};
        background: #333;
        border-radius: 10px;
        font-size: 1.2vw;
        @media (max-width: 800px) {
          font-size: 1.8vw;
        }
      `}
    >
      gatsby new my-app https://github.com/gojutin/gatsby-starter.git
    </code>
  </Layout>
);

export default App;
