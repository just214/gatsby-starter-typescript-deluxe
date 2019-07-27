import React from "react";
import styled from "styled-components";
import GithubIcon from "../images/github.svg";

const Wrapper = styled.div``;

const GithubLink = () => (
  <Wrapper>
    <a
      href="https://github.com/gojutin/gatsby-starter"
      rel="noopener noreferrer"
      target="_blank"
      css={`
        color: steelblue;
        cursor: pointer;
      `}
    >
      <img width={30} src={GithubIcon} />
    </a>
  </Wrapper>
);

export default GithubLink;
