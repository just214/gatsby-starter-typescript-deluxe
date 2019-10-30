import React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Oops! 404</h1>
    <h3>You just hit a route that doesn&#39;t exist.</h3>
    <Link to="/">Go Home</Link>
  </Layout>
);

export default NotFoundPage;
