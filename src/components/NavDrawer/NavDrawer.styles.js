import styled from "@emotion/styled/macro";
import { IconButton, Flex } from "@chakra-ui/react";

export const NavSection = styled(Flex)`
  position: absolute;
  top: 0;
  left: 5px;
  height: 100vh;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: ${(props) => (props.navSize === "small" ? "15px" : "30px")};
  width: ${(props) => (props.navSize === "small" ? "75px" : "200px")};
  flex-direction: column;
  justify-content: space-between;
`;

export const NavItemsWrapper = styled(Flex)`
  flex-direction: column;
  width: 100%;
  align-items: ${(props) =>
    props.navSize === "small" ? "center" : "flex-start"};
`;

export const CustomizeButton = styled(IconButton)`
  background: none;
  margin-top: 5px;
  :hover {
    background: none;
  }
`;
