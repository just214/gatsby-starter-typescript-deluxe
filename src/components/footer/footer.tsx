import React from "react";
import styled from "styled-components";
import { GithubIcon } from "../github-icon";
import { useTheme } from "../../styles";

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const StyledSvg = styled.svg`
  position: absolute;
  bottom: 0;
`;

const FooterContainer = styled.div`
  text-align: center;
  padding-bottom: 10px;
`;

const Footer: React.FC = () => {
  const { blue } = useTheme().colors;
  return (
    <StyledFooter>
      {/* This svg was created at https://getwaves.io/ */}
      <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={blue}
          fillOpacity="1"
          d="M0,224L34.3,234.7C68.6,245,137,267,206,266.7C274.3,267,343,245,411,213.3C480,181,549,139,617,117.3C685.7,96,754,96,823,112C891.4,128,960,160,1029,186.7C1097.1,213,1166,235,1234,213.3C1302.9,192,1371,128,1406,96L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        />
      </StyledSvg>
      <FooterContainer>
        <GithubIcon />
      </FooterContainer>
    </StyledFooter>
  );
};

export { Footer };
