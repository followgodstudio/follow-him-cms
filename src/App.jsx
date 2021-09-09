/* eslint-disable react/jsx-no-bind */
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { logIn } from "redux/slices/userSlice";
import { useDispatch } from "react-redux";

// components
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import HomePage from "pages/HomePage/HomePage";
import SignInPage from "pages/shared/SigninPage/SigninPage";
import SignUpPage from "pages/shared/SignUpPage/SignUpPage";
import NotFoundPage from "pages/shared/NotFoundPage/NotFoundPage";
import UserProfilePage from "pages/UserProfilePage/UserProfilePage";
import Articles from "pages/ArticlesPage/ArticlesPage";
import OrganizationsPage from "pages/OrganizationsPage/OrganizationsPage";
import NavDrawer from "components/NavDrawer/NavDrawer";

function App() {
  const dispatch = useDispatch();
  const [isFetchingUser, setIsFetchingUser] = useState(true);
  useEffect(() => {
    dispatch(logIn()).then(() => setIsFetchingUser(false));
  }, [dispatch]);

  const [navSize, setNavSize] = useState("large");
  function changeNavSize() {
    if (navSize === "large") {
      setNavSize("small");
    } else {
      setNavSize("large");
    }
  }
  return (
    !isFetchingUser && (
      <>
        <Box ml={navSize === "large" ? "280px" : "130px"}>
          <Header
            ml={navSize === "large" ? "300px" : "100px"}
            navSize={navSize}
            changeNavSize={changeNavSize}
          />
          <main>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/signin" component={SignInPage} />
              <Route exact path="/signup" component={SignUpPage} />
              <Route path="/userprofile" component={UserProfilePage} />
              <Route path="/articles" component={Articles} />
              <Route
                path="/organizations"
                component={OrganizationsPage}
              />
              <Route component={NotFoundPage} />
            </Switch>
          </main>
          <Footer />
        </Box>
        <NavDrawer navSize={navSize} changeNavSize={changeNavSize} />
      </>
    )
  );
}

export default App;
