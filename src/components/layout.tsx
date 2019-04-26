/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { useStaticQuery, graphql } from "gatsby";
import APSLogo from "../components/aps-logo";
import Footer from "./footer";

const Container = styled.div`
  ${tw`text-center p-1 font-sans`}
  margin: 0 auto;
  max-width: 960;
`;

const Title = styled.div`
  ${tw`font-black p-2 mb-6 font-sans rounded-full text-3xl opacity-75`};
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const { siteMetadata } = data.site;

  return (
    <Container>
      <APSLogo />
      <br />
      <Title>🌟 {siteMetadata.title.toUpperCase()} 🌟</Title>

      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
