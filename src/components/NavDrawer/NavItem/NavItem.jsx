import React from "react";
import PropTypes from "prop-types";
import { Flex, Icon, Menu } from "@chakra-ui/react";
import {
  NavItemWrapper,
  NavItemText,
  CustomizeMenuList,
  NavLink,
} from "./NavItem.styles";

function NavItem({ icon, title, active, navSize, linkto }) {
  return (
    <NavItemWrapper>
      <Menu placement="right">
        <NavLink active={active} navSize={navSize} to={linkto}>
          <Flex>
            <Icon
              as={icon}
              fontSize="xl"
              color={active ? "#82AAAD" : "gray.500"}
            />
            <NavItemText navSize={navSize}>{title}</NavItemText>
          </Flex>
        </NavLink>
        <CustomizeMenuList />
      </Menu>
    </NavItemWrapper>
  );
}

NavItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  icon: PropTypes.any,
  title: PropTypes.string,
  active: PropTypes.bool,
  navSize: PropTypes.string,
  linkto: PropTypes.string,
};

export default NavItem;
