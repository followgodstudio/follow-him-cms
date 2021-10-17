import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

/**
 * A simple container used to center content and enforce a max-width. **CenteredWrapper** is mostly used to wrap page content.
 */
const CenteredWrapper = ({ children, ...rest }) => {
  return (
    <Box width="100%" margin="0 auto" paddingX="40px" {...rest}>
      {children}
    </Box>
  );
};

CenteredWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CenteredWrapper;
