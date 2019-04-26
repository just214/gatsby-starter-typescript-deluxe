import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import GithubIcon from "../images/github.svg";

const Wrapper = styled.div`
  ${tw`m-0`}
`;

const GithubLink = () => (
  <Wrapper>
    <a
      href="https://github.com/gojutin/gatsby-starter"
      rel="noopener noreferrer"
      target="_blank"
      css={`
        color: steelblue;
        cursor: pointer;
        ${tw`hover:opacity-75 text-lg`}
      `}
    >
      <img width={30} src={GithubIcon} />
    </a>
  </Wrapper>
);

export default GithubLink;
