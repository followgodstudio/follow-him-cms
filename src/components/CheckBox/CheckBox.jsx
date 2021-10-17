import { Checkbox as ChakraCheckbox } from "@chakra-ui/react";
import styled from "@emotion/styled/macro";
import theme from "components/CustomTheme";
import PropTypes from "prop-types";
import React from "react";

const StyledCheckbox = styled(ChakraCheckbox)`
  .chakra-checkbox,
  .chakra-checkbox__label {
    font-size: ${(props) => (props.size === "small" ? "12px" : "16px")};
    color: ${(props) => props.fontColor ?? theme.colors.semantics.default};
    margin-left: ${(props) => (props.size === "small" ? "24px" : "28px")};
    width: 100%;
  }
  .chakra-checkbox__control {
    position: absolute;
    top: ${(props) => (props.size === "small" ? "2.5px" : "4px")};
    height: ${(props) => (props.size === "small" ? "13px" : "16px")};
    width: ${(props) => (props.size === "small" ? "13px;" : "16px")};
    border-radius: 2px;
    color: ${(props) => props.color ?? theme.colors.semantics.default};
    border-color: ${(props) => props.color ?? theme.colors.semantics.default};
    &[data-checked] {
      color: ${(props) => props.color ?? theme.colors.semantics.default};
      background: ${(props) => props.color ?? theme.colors.semantics.default};
      svg {
        font-size: ${(props) => (props.size === "small" ? "0.35em" : "0.5em")};
        color: white;
      }
    }
    &[data-focus] {
      box-shadow: none;
    }
    &[data-disabled] {
      color: #f2f2f2;
      background: #f2f2f2;
      border-color: #f2f2f2;
    }
    &[data-disabled]:hover {
      color: #f2f2f2;
      background: #f2f2f2;
      border-color: #f2f2f2;
    }
  }
`;

const Checkbox = ({ children, ...rest }) => {
  return <StyledCheckbox {...rest}>{children}</StyledCheckbox>;
};

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Checkbox;
