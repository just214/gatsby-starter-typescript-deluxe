import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import apsLogo from "../assets/aps-logo.svg";

const Title = styled.h1`
  ${tw`text-gray p-2 font-sans`};
`;

const App = () => (
  <div
    css={`
      text-align: center;
    `}
  >
    <img height={400} src={apsLogo} />
    <Title>Gatsby Starter Kit 🤖</Title>
  </div>
);

export default App;
