import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

/**
 * Renders \<h1>, \<h2>, \<h3>, \<h4>, \<h5> tags. See the **Text** component for non-heading text.
 */
const Heading = ({ variant, children, ...rest }) => {
  const htmlElement = variant === "hero" ? "h1" : variant;

  const variants = {
    hero: {
      fontSize: { base: "3xl", md: "5xl" },
      lineHeight: { base: 1.1, md: 1.125 },
      fontWeight: "extrabold",
      fontFamily: "Ubuntu",
    },
    h1: {
      fontSize: { base: "2xl", md: "4xl" },
      lineHeight: { base: 1.125, md: 1.167 },
      fontWeight: "extrabold",
      fontFamily: "Ubuntu",
    },
    h2: {
      fontSize: { base: "lg", md: "2xl" },
      lineHeight: { base: 1.2, md: 1.125 },
      fontWeight: "extrabold",
      fontFamily: "Ubuntu",
    },
    h3: {
      fontSize: { base: "md", md: "xl" },
      lineHeight: { base: 1.25, md: 1.5 },
      fontWeight: { base: "bold", md: "bold" },
      fontFamily: "Ubuntu",
    },
    h4: {
      fontSize: { base: "sm", md: "lg" },
      lineHeight: { base: 1.429, md: 1.2 },
      fontWeight: { base: "bold", md: "bold" },
      fontFamily: "Ubuntu",
    },
    h5: {
      fontSize: { base: "xs", md: "md" },
      lineHeight: { base: 1.333, md: 1.25 },
      fontWeight: { base: "bold", md: "bold" },
      fontFamily: "Ubuntu",
      textTransform: "uppercase",
    },
  };
  const selected = variants[variant];

  return (
    <Box as={htmlElement} {...selected} {...rest}>
      {children}
    </Box>
  );
};

Heading.propTypes = {
  variant: PropTypes.oneOf(["hero", "h1", "h2", "h3", "h4", "h5"]).isRequired,
  children: PropTypes.node.isRequired,
};

export default Heading;
