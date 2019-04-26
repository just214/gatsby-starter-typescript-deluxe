import React from "react";
import tw from "tailwind.macro";
import styled from "styled-components";
import GithubLink from "./github-link";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #efefef;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 12px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div css={tw`px-5`}>© 2019 American Physical Society</div>
      <GithubLink />
    </StyledFooter>
  );
};

export default Footer;
