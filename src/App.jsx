// components
import { Box, Flex } from "@chakra-ui/react";
import Footer from "components/Footer/Footer";
import Header, { withoutHeaderPaths } from "components/Header/Header";
import NavDrawer from "components/NavDrawer/NavDrawer";
// routes
import HomePage from "pages/HomePage/HomePage";
import ArticlesPage from "pages/ArticlesPage/ArticlesPage";
import NotFoundPage from "pages/shared/NotFoundPage/NotFoundPage";
import SignInPage from "pages/shared/SigninPage/SigninPage";
import SignUpPage from "pages/shared/SignUpPage/SignUpPage";
// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
// import { logIn } from "redux/slices/userSlice";

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
            <Switch>
              <Route exact path="/signin" component={SignInPage} />
              <Route exact path="/signup" component={SignUpPage} />
              <Route exact path="/" component={HomePage} />
              <Route path="/organizations/view" component={ArticlesPage} />
              <Route path="/articles/view" component={ArticlesPage} />
              <Route path="/articles/create" component={ArticlesPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Box>
        </Flex>
      </main>
      <Footer />
    </>
    // )
  );
};

export default App;
