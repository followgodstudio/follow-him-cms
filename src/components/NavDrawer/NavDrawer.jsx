import { Box } from "@chakra-ui/react";
import theme from "components/CustomTheme";
import { withoutHeaderPaths } from "components/Header/Header";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import NavDrawerAccordion from "./NavDrawerAccordion/NavDrawerAccordion";
import NavDrawerPopover from "./NavDrawerPopover/NavDrawerPopover";

const NavDrawer = () => {
  const { isDrawerAccordionOn } = useSelector((state) => state.util);
  return (
    <Box
      position="fixed"
      pt="100px"
      zIndex="1"
      bg="white"
      borderRight={`1px solid ${theme.colors.gray[200]}`}
      minHeight="100%"
    >
      <Switch>
        <Route path={withoutHeaderPaths} render={() => null} />
        <Route
          render={() =>
            isDrawerAccordionOn ? <NavDrawerAccordion /> : <NavDrawerPopover />
          }
        />
      </Switch>
    </Box>
  );
};

export default NavDrawer;
