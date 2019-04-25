import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

// Components
import Layout from "../components/layout";
import APSLogo from "../components/aps-logo";

const Title = styled.h1`
  ${tw`text-gray p-1 font-sans`};
`;

const App = () => (
  <Layout>
    <APSLogo />
    <Title>Gatsby Starter Kit 🤖</Title>
    <a
      href="https://github.com"
      rel="noopener noreferrer"
      target="_blank"
      css={`
        color: steelblue;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      `}
    >
      View on GitHub
    </a>
  </Layout>
);

export default App;
