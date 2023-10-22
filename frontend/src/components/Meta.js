import React from "react";
import { Helmet } from "react-helmet";

/**
 * Renders a Helmet component with the given title, description, and keywords.
 *
 * @param {string} title - The title of the Helmet component.
 * @param {string} description - The description of the Helmet component.
 * @param {string} keywords - The keywords of the Helmet component.
 * @return {JSX.Element} The Helmet component.
 */
const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To Store76",
  description: "We sell the best products for cheap",
  keywords: "electronics, buy electronics, cheap electroincs",
};

export default Meta;
