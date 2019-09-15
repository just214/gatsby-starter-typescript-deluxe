import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Footer from "../footer/footer";
import useCSSDebugger from "../../hooks/useCSSDebugger";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #183653;
  }
  html {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
`;

const theme = {
  blue: "#0099ff",
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  margin: 20px 0px;
  color: white;
`;

const Tagline = styled.h2`
  font-size: 1.2rem;
  color: ${props => props.theme.blue};
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

  const CSSDebugger = useCSSDebugger();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <CSSDebugger
          debug={false}
          showToggle={true}
          showGrid={true}
          buttonStyle={{
            background: "lightskyblue",
            color: "#333",
            border: "2px solid orange",
          }}
        />
        <Title>{title.toUpperCase()}</Title>
        <Tagline>{description}</Tagline>
        <main>{children}</main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
