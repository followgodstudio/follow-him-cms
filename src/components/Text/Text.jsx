import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

/**
 * Renders \<p> tags. See the **Heading** component for heading text.
 */
const Text = ({ size = "default", bold = false, children, ...rest }) => {
  const sizes = {
    default: {
      fontFamily: "Ubuntu Condensed",
      fontSize: { base: "sm", md: "md" },
      lineHeight: 1.5,
      fontWeight: bold ? "bold" : "normal",
    },
    medium: {
      fontFamily: "Ubuntu Condensed",
      fontSize: { base: "xs", md: "sm" },
      lineHeight: { base: 1.333, md: 1.429 },
      fontWeight: bold ? "bold" : "normal",
    },
    small: {
      fontFamily: "Ubuntu Condensed",
      fontSize: { base: "2xs", md: "xs" },
      lineHeight: { base: 1.2, md: 1.333 },
      fontWeight: bold ? "bold" : "normal",
    },
  };
  const selected = sizes[size];

  return (
    <Box as="p" {...selected} {...rest}>
      {children}
    </Box>
  );
};

Text.propTypes = {
  size: PropTypes.oneOf(["small", "medium"]),
  bold: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Text;
