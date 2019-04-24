import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import apsLogo from "../assets/aps-logo.svg";

const Button = styled.button`
  ${tw`bg-purple hover:bg-blue-dark text-white p-2 rounded`};
`;

const App = () => (
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

export default App;
