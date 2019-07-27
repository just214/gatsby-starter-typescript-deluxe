/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Footer from "./footer";

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

const Title = styled.div`
  font-size: 30px;
  padding: 10px;
  margin-bottom: 20px;
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
      <Title>{siteMetadata.title.toUpperCase()} 🌟</Title>
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
