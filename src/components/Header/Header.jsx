import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import {
  IconAlignJustified,
  IconArrowRight,
  IconTallymark1,
} from "@tabler/icons";
import CenteredWrapper from "components/CenteredWrapper/CenteredWrapper";
import theme from "components/CustomTheme";
import Heading from "components/Heading/Heading";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { switchNavDrawer } from "redux/slices/utilSlice";
import {
  LogoLink,
  MichaelsCircleLogo,
  SuixingLogo,
  RightNav,
} from "./Header.styles";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import LoginHeaderMenu from "./LoginHeaderMenu/LoginHeaderMenu";

export const withoutHeaderPaths = ["/signin", "/signup", "/forgot-password"];

const Header = () => {
  const dispatch = useDispatch();
  const { selectedNav, selectedSubNav, isDrawerAccordionOn } = useSelector(
    (state) => state.util
  );

  const [isDesktop] = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);

  useEffect(() => {
    if (!isDesktop && isDrawerAccordionOn) {
      dispatch(switchNavDrawer());
    }
  }, [dispatch, isDesktop, isDrawerAccordionOn]);

  return (
    <Switch>
      <Route path={withoutHeaderPaths} render={() => null} />
      <Route
        render={() => (
          <CenteredWrapper
            py="20px"
            pl="0px"
            display="flex"
            width="100%"
            flexShrink="0"
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
            position="fixed"
            background="gray.0"
            borderBottom={`1px solid ${theme.colors.gray[200]}`}
            zIndex={1000}
          >
            <Flex alignItems="center">
              <LogoLink to="/">
                {isDrawerAccordionOn ? <SuixingLogo /> : <MichaelsCircleLogo />}
              </LogoLink>
              {isDesktop && (
                <Box cursor="pointer">
                  {isDrawerAccordionOn ? (
                    <IconAlignJustified
                      size="28px"
                      color="#ff4961"
                      cursor="pointer"
                      onClick={() => dispatch(switchNavDrawer())}
                    />
                  ) : (
                    <IconArrowRight
                      size="28px"
                      color="#ff4961"
                      cursor="pointer"
                      onClick={() => dispatch(switchNavDrawer())}
                    />
                  )}
                </Box>
              )}
              <Heading ml="24px" variant="h2">
                {selectedSubNav || selectedNav}
              </Heading>
            </Flex>
            <RightNav>
              <LanguageSelector />
              {isDesktop && (
                <IconTallymark1 color={theme.colors.gray[500]} stroke={1} />
              )}
              <LoginHeaderMenu />
            </RightNav>
          </CenteredWrapper>
        )}
      />
    </Switch>
  );
};

export default Header;
