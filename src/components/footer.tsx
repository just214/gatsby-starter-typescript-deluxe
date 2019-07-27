import React from "react";
import styled from "styled-components";
import GithubLink from "./github-link";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #efefef;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <GithubLink />
    </StyledFooter>
  );
};

export default Footer;
