import { Box, Spinner } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

/**
 * It's a button. Doesn't get simpler than this.
 */
const Button = ({
  variant = "primary-1",
  size = "medium",
  isLoading = false,
  type = "button",
  children,
  disabled = false,
  ...rest
}) => {
  let background;
  let textColor;
  let fontSize;
  let height;
  let border;
  let borderWidth = 0;
  let paddingX;
  let activeStyles;
  let hoverStyles;
  let disabledStyles;

  const focusStyles = {
    outline: 0,
  };

  const primaryAndSecondaryDisabledStyles = {
    background: "gray.300",
    color: "gray.0",
    cursor: "not-allowed",
    border: "none",
  };

  const tertiaryDisabledStyles = {
    color: "gray.300",
    cursor: "not-allowed",
    textDecoration: "none",
  };

  if (size === "large") {
    fontSize = "md";
    height = "14";
    paddingX = `${(23.5 - borderWidth) / 16}rem`;
  } else if (size === "medium") {
    fontSize = "sm";
    height = "12";
    paddingX = `${(23.5 - borderWidth) / 16}rem`;
  } else if (size === "small") {
    fontSize = "xs";
    height = "10";
    paddingX = `${(19.5 - borderWidth) / 16}rem`;
  }

  if (variant.includes("tertiary")) {
    height = "auto";
    paddingX = "0";
  }

  switch (variant) {
    case "primary-1":
      background = "linear-gradient(135deg,#E9425B,#CF1F2E)";
      textColor = "white";
      activeStyles = { background };
      hoverStyles = {
        background: "linear-gradient(135deg,#C31C35,#A90008)",
      };
      disabledStyles = primaryAndSecondaryDisabledStyles;
      break;
    case "primary-2":
      background = "#1B1B1B";
      textColor = "white";
      activeStyles = { background };
      hoverStyles = {
        background: "#1B1B1BBF",
      };
      disabledStyles = primaryAndSecondaryDisabledStyles;
      break;
    case "secondary-1":
      background = "transparent";
      textColor = "#CF1F2E";
      border = "2px solid #CF1F2E";
      activeStyles = { background };
      hoverStyles = {
        background: "#D11F2E12",
      };
      borderWidth = 2;
      disabledStyles = primaryAndSecondaryDisabledStyles;
      break;
    case "secondary-2":
      background = "transparent";
      textColor = "#2E2E2E";
      border = "2px solid #1B1B1B";
      activeStyles = { background };
      hoverStyles = {
        background: "#1B1B1B1A",
      };
      borderWidth = 2;
      disabledStyles = primaryAndSecondaryDisabledStyles;
      break;
    case "tertiary-1":
      textColor = "#2E2E2E";
      hoverStyles = {
        textDecoration: "underline",
      };
      disabledStyles = tertiaryDisabledStyles;
      break;
    case "tertiary-2":
      textColor = "#EB003B";
      hoverStyles = {
        textDecoration: "underline",
      };
      disabledStyles = tertiaryDisabledStyles;
      break;
    case "tertiary-3":
      textColor = "#0475BC";
      hoverStyles = {
        textDecoration: "underline",
      };
      disabledStyles = tertiaryDisabledStyles;
      break;
    default:
  }

  return (
    <Box
      as="button"
      type={type}
      paddingX={paddingX}
      fontSize={fontSize}
      height={height}
      borderRadius="full"
      border={border}
      background={background}
      color={textColor}
      fontWeight="bold"
      _hover={hoverStyles}
      _active={activeStyles}
      _focus={focusStyles}
      _disabled={disabledStyles}
      cursor={isLoading ? "not-allowed" : "pointer"}
      position="relative"
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading && (
        <Box
          position="absolute"
          top="58%"
          left="50%"
          transform="translate(-50%,-50%)"
        >
          <Spinner emptyColor="gray.400" size="sm" />
        </Box>
      )}
      <Box as="span" visibility={isLoading ? "hidden" : "visible"}>
        {children}
      </Box>
    </Box>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    "primary-1",
    "primary-2",
    "secondary-1",
    "secondary-2",
    "tertiary-1",
    "tertiary-2",
    "tertiary-3",
  ]).isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  /**
   * Can be text or html element.
   */
  children: PropTypes.node.isRequired,
};

export default Button;
