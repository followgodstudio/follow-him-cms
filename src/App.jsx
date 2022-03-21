// components
import { Box, Flex } from "@chakra-ui/react";
import Footer from "components/Footer/Footer";
import Header, { withoutHeaderPaths } from "components/Header/Header";
import { ReactNotifications } from "react-notifications-component";
import NavDrawer from "components/NavDrawer/NavDrawer";
import "react-notifications-component/dist/theme.css";
// routes
import HomePage from "pages/HomePage/HomePage";
import ArticlesPage from "pages/ArticlesPage/ArticlesPage";
import MyEditor from "pages/ArticlesPage/Editor/MyEditor";
import NotFoundPage from "pages/shared/NotFoundPage/NotFoundPage";
import SignInPage from "pages/shared/SignInPage/SignInPage";
import { useSelector } from "react-redux";
import { Switch, useLocation } from "react-router-dom";
import { AuthenticatedRoute, UnauthenticatedRoute } from "utils/Route";
import { AuthContextProvider } from "./utils/firebase";

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
                <AuthenticatedRoute exact path="/" component={HomePage} />
                <AuthenticatedRoute
                  path="/organizations/view"
                  component={ArticlesPage}
                />
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
