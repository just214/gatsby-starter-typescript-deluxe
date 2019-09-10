import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Footer from "../footer/footer";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  html {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }

`;

const theme = {
  blue: "rgb(50, 104, 168)",
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 20px 0px;
`;

const Tagline = styled.h2`
  font-size: 1.2rem;
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

  const { title, description } = data.site.siteMetadata;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Title>{title.toUpperCase()}</Title>
        <Tagline>{description}</Tagline>
        <main>{children}</main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
