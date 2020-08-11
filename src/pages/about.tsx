import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { RouteComponentProps } from "@reach/router";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

/***************************************************************
  Below are some examples of using styled-components with the
  theme and framer-motion.
/***************************************************************

/*
  1. A basic styled component using the theme.
*/
const StyledComponent1 = styled.p`
  color: ${(props) => props.theme.colors.orange};
  font-size: 1.2rem;
`;

/*
  2. A styled component that changes color based on the screen size
  using the theme.
*/
const StyledComponent2 = styled.p`
  color: ${({ theme }) =>
    theme.screens.sm ? theme.colors.blue : theme.colors.orange};
  font-size: 1.2rem;
`;

/*
  3. A styled component that extends a framer-motion component.
  (animation props applied in the component instance)
*/

const OrangeBlock = styled(motion.div)`
  background: ${(props) => props.theme.colors.orange};
  height: 100px;
  width: 100px;
  border-radius: 10px;
  margin: 10px;
`;

/*
  4. A styled component that extends a framer-motion component.
  (animation props applied in the styled-component definition
  via the attrs method)
*/
const BlueBlock = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 2 },
  whileHover: { scale: 0.8 },
}))`
  background: ${(props) => props.theme.colors.blue};
  height: 100px;
  width: 100px;
  border-radius: 10px;
  margin: 10px;
`;

const BlocksWrapper = styled.section`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const AboutPage: React.FC<RouteComponentProps> = ({ location = {} }) => {
  const path = location.pathname;
  return (
    <Layout>
      <SEO
        title="About gatsby-starter-template-deluxe"
        description="Examples using the gatsby-starter-template-deluxe."
      />
      <h3>
        Hi, you are on the <code>{path}</code> page!
      </h3>

      <StyledComponent1>I am a basic styled component.</StyledComponent1>
      <StyledComponent2>
        My font color should change on a small device.
      </StyledComponent2>

      <BlocksWrapper>
        <OrangeBlock
          animate={{ rotate: 360 }}
          transition={{ duration: 2 }}
          whileHover={{ rotate: 1.1 }}
        />
        <BlueBlock />
      </BlocksWrapper>
    </Layout>
  );
};

export default AboutPage;
