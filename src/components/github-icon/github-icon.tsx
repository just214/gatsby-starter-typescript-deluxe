import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

// import GithubIcon from "../images/github.svg";

const Wrapper = styled.div``;

const GithubLink = () => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "github-icon.png" }) {
        childImageSharp {
          fixed(height: 30, width: 30) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.icon.childImageSharp.fixed;
  return (
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
        <Img fixed={imageData} />
      </a>
    </Wrapper>
  );
};

export default GithubLink;
