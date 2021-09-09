import styled from "@emotion/styled/macro";
import { Box, Flex, Text, MenuList } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const NavItemWrapper = styled(Flex)`
  margin-top: 30px;
  flex-direction: column;
  width: 100%;

  align-items: ${(props) =>
    props.navSize === "small" ? "center" : "flex-start"};
`;

export const NavItemText = styled(Text)`
  margin-left: 5px;
  display: ${(props) => (props.navSize === "small" ? "none" : "flex")};
`;

export const CustomizeMenuList = styled(MenuList)`
  padding-top: 0;
  padding-bottom: 0;
  border: none;
  width: 200px;
  height: 200px;
  margin-left: 5px;
`;

export const NavLink = styled(Link)`
  width: ${(props) => (props.navSize === "large" ? "100%" : "")};
  border-radius: 8px;
  padding: 10px;
  background-color: ${(props) => props.active && "rgba(255, 73, 97, 0.1);"};
  :hover {
    background-color: rgba(255, 73, 97, 0.1);
    text-decoration: none;
  }
`;
