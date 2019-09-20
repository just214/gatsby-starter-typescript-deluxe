import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Footer from "../footer/footer";
import useCSSDebugger from "../../hooks/useCSSDebugger";
import theme from "./theme";
import GlobalStyles from "./global-styles";
import Link from "../link/link";

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

const Layout: React.FC = ({ children }) => {
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

  const buttonStyle = {
    background: "lightskyblue",
    color: "#333",
    border: "2px solid orange",
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <CSSDebugger
          debug={false}
          showToggle={true}
          showGrid={true}
          color="rgba(255, 0, 0, .75)"
          buttonStyle={buttonStyle}
        />
        <Link to="/">
          <Title>{title.toUpperCase()}</Title>
        </Link>
        <Tagline>{description}</Tagline>
        <main>{children}</main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
