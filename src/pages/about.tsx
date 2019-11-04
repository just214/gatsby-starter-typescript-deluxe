import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

const AboutPage: React.FC<RouteComponentProps> = ({ location }) => (
  <Layout>
    <SEO
      title="About gatsby-starter-template-deluxe"
      description="All about the gatsby-starter-template-deluxe and everything that is included."
    />
    <p>
      Hi, you are on the <code>{location ? location.pathname : "/"}</code> page!
    </p>
  </Layout>
);

export default AboutPage;
