import "react-notifications-component/dist/theme.css";

import { AuthenticatedRoute, UnauthenticatedRoute } from "utils/Route";
import { Box, Flex } from "@chakra-ui/react";
import Header, { withoutHeaderPaths } from "components/Header/Header";
import { Switch, useLocation } from "react-router-dom";

import ArticlesPage from "pages/ArticlesPage/ArticlesPage";
import { AuthContextProvider } from "./utils/firebase";
import Footer from "components/Footer/Footer";
import HomePage from "pages/HomePage/HomePage";
import MyEditor from "pages/ArticlesPage/Editor/MyEditor";
import NavDrawer from "components/NavDrawer/NavDrawer";
import NotFoundPage from "pages/shared/NotFoundPage/NotFoundPage";
import OrganizationEditPage from "pages/OrganizationsPage/OrganizationEditPage/OrganizationEditPage";
import OrganizationsPage from "pages/OrganizationsPage/OrganizationsPage";
import { ReactNotifications } from "react-notifications-component";
import SignInPage from "pages/shared/SigninPage/SigninPage";
import { useSelector } from "react-redux";

const App = () => {
  // const dispatch = useDispatch();
  const { pathname } = useLocation();

  const withHeaderAndNavDrawer = withoutHeaderPaths.every(
    (path) => path !== pathname
  );

  const { isDrawerAccordionOn } = useSelector((state) => state.util);

  // const [isFetchingUser, setIsFetchingUser] = useState(true);

  // useEffect(() => {
  //   dispatch(logIn()).then(() => setIsFetchingUser(false));
  // }, [dispatch]);

  return (
    // !isFetchingUser && (
    <>
      <Header />
      <main>
        <Flex>
          <NavDrawer />
          <Box
            pl={
              withHeaderAndNavDrawer
                ? isDrawerAccordionOn
                  ? "300px"
                  : "100px"
                : "0"
            }
            pt={withHeaderAndNavDrawer ? "120px" : "0"}
            pr="20px"
            width="100%"
          >
            <AuthContextProvider className="app-container">
              <ReactNotifications />
              <Switch>
                <UnauthenticatedRoute
                  exact
                  path="/signin"
                  component={SignInPage}
                />
                <UnauthenticatedRoute
                  exact
                  path="/signup"
                  component={SignInPage}
                />
                <UnauthenticatedRoute
                  exact
                  path="/forgot-password"
                  component={SignInPage}
                />
                <AuthenticatedRoute exact path="/" component={HomePage} />
                <AuthenticatedRoute
                  path="/articles/view"
                  component={ArticlesPage}
                />
                <AuthenticatedRoute
                  path="/articles/create"
                  component={MyEditor}
                />
                <AuthenticatedRoute
                  path="/articles/edit/:id"
                  component={MyEditor}
                />
                <AuthenticatedRoute
                  path="/organizations/view"
                  component={OrganizationsPage}
                />
                <AuthenticatedRoute
                  path="/organizations/create"
                  component={OrganizationEditPage}
                />
                <UnauthenticatedRoute component={NotFoundPage} />
              </Switch>
            </AuthContextProvider>
          </Box>
        </Flex>
      </main>
      <Footer />
    </>
    // )
  );
};

export default App;
