import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const SiteMetadata = ({ title, description, image }) => {
  const previewImage = !!image ? image : "https://www.stackbit.com/images/stackbit.png";
  return (
    <Helmet
      defer={false}
      defaultTitle="Stackbit Quick Start"
      title={title}
      titleTemplate={`%s | "Stackbit Quick Start"`}
    >
      <html lang="en-US" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={titleTemplate} />
      <meta property="og:locale" content="en-US" />
      <meta
        property="og:site_name"
        content="You forgot to provide a site title"
      />
      <meta property="og:image" content={previewImage} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={previewImage} />
    </Helmet>
  );
};

SiteMetadata.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default SiteMetadata;
