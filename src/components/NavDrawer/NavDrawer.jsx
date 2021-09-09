import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { IconHome, IconCalendar, IconUser, IconSettings } from "@tabler/icons";
import { Image } from "@chakra-ui/react";
import SuixingLogo from "assets/images/suixing-icon.png";
import NavItem from "./NavItem/NavItem";
import { NavSection, NavItemsWrapper } from "./NavDrawer.styles";

function NavDrawer({ navSize }) {
  const withoutNavDrawerPaths = ["/signin", "/signup"];

  return (
    <Switch>
      <Route path={withoutNavDrawerPaths} render={() => null} />
      <Route
        render={() => (
          <NavSection navSize={navSize}>
            <NavItemsWrapper>
              <Image
                src={SuixingLogo}
                alt="logo"
                width="100px"
                marginX="auto"
                mt="30px"
              />
              <NavItem
                navSize={navSize}
                icon={IconHome}
                title="Dashboard"
                linkto=""
              />

              <NavItem
                navSize={navSize}
                icon={IconUser}
                title="Articles"
                linkto="/articles"
              />
              <NavItem
                navSize={navSize}
                icon={IconSettings}
                title="Orgranizations"
                linkto="/organizations"
              />

              <NavItem
                navSize={navSize}
                icon={IconCalendar}
                title="User Profile"
                linkto="/userprofile"
              />
            </NavItemsWrapper>
          </NavSection>
        )}
      />
    </Switch>
  );
}
NavDrawer.propTypes = {
  navSize: PropTypes.string,
};
export default NavDrawer;
