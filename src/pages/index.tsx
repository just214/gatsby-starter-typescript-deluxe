import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
const apsLogo = require("../assets/aps-logo.svg");

const Button = styled.button`
  ${tw`bg-purple hover:bg-blue-dark text-white p-2 rounded`};
`;

export default () => (
  <div
    css={`
      text-align: center;
    `}
  >
    <img height={400} src={apsLogo} />
    <h2>Gatsby Starter Kit</h2>
    <Button>Click me!</Button>
  </div>
);
