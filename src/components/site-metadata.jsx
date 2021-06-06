import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const SiteMetadata = ({ title, description, image }) => {
  return (
    <Helmet
      defer={false}
      defaultTitle="You forgot to provide a site title"
      title={title}
      titleTemplate={`%s | "You forgot to provide a site title"`}
    >
      <html lang="en-US" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:locale" content="en-US" />
      <meta
        property="og:site_name"
        content="You forgot to provide a site title"
      />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

SiteMetadata.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default SiteMetadata;
