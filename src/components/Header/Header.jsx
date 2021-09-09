import PropTypes from "prop-types";
import { Flex, Spacer } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";
import { IconMenu2, IconChevronLeft } from "@tabler/icons";
import LoginHeaderMenu from "./LoginHeaderMenu/LoginHeaderMenu";
import HeaderSearchBar from "./HeaderSearchBar/HeaderSearchBar";

function Header({ navSize, changeNavSize }) {
  const withoutHeaderPaths = ["/signin", "/signup"];

  // Chakra-UI disclosure hook for drawers, modals, etc.
  return (
    <Switch>
      <Route path={withoutHeaderPaths} render={() => null} />
      <Route
        render={() => (
          <Flex
            paddingY="20px"
            width="100%"
            justifyContent="flex-end"
            alignItems="center"
            zIndex={1000}
          >
            {navSize === "small" ? (
              <IconMenu2 onClick={changeNavSize} cursor="pointer" />
            ) : (
              <IconChevronLeft onClick={changeNavSize} cursor="pointer" />
            )}
            <Spacer />
            <Flex>
              <Flex mr="32px" width="450px">
                <HeaderSearchBar />
              </Flex>
              <Flex mr="72px" ml="32px">
                <LoginHeaderMenu />{" "}
              </Flex>
            </Flex>
          </Flex>
        )}
      />
    </Switch>
  );
}
Header.propTypes = {
  navSize: PropTypes.string,
  changeNavSize: PropTypes.func,
};
export default Header;
