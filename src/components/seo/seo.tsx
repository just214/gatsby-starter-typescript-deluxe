import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

type SEOProps = {
  title?: string;
  description?: string;
  url?: string;
  keywords?: string[];
};
const SEO: React.FC<SEOProps> = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          url
        }
      }
    }
  `);

  const { siteMetadata } = data.site;

  const { title, description, url } = siteMetadata;
  const siteTitle = props.title || title;
  const siteDescription = props.description || description;
  const siteUrl = props.url || url;
  const siteImage = `${siteUrl}/icons/icon_512x512.png`;
  return (
    <Helmet>
      <html lang="en" />
      <title>{siteTitle}</title>
      <meta charSet="utf-8" />
      <link rel="canonical" href={siteUrl} />
      <meta name="description" content={siteDescription} />
      <meta name="image" content={siteImage} />
      <meta property="keywords" content={(props.keywords || []).join(",")} />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={"@gojutin"} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />

      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="apple-touch-icon" href="icons/apple-touch-icon.png" />
    </Helmet>
  );
};

export default SEO;
