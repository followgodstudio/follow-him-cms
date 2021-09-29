import { Stack } from "@chakra-ui/react";
import Text from "components/Text/Text";
import PropTypes from "prop-types";
import React from "react";
import Switch from "./Switch";

const SwitchAndText = ({
  switchSize = "lg",
  switchProps,
  textSize = "medium",
  textProps,
  text,
  ...rest
}) => {
  return (
    <Stack align="center" direction="row" {...rest}>
      <Switch size={switchSize} my="auto" {...switchProps} />
      <Text size={textSize} fontWeight="600" {...textProps}>
        {text}
      </Text>
    </Stack>
  );
};

SwitchAndText.propTypes = {
  switchSize: PropTypes.oneOf(["lg", "md", "sm"]),
  switchProps: PropTypes.objectOf(),
  textSize: PropTypes.oneOf(["small", "medium"]),
  textProps: PropTypes.objectOf(),
  text: PropTypes.node.isRequired,
};

export default SwitchAndText;
