import { Route, Redirect, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuthState } from "./firebase";

/**
 * A wrapper for <Route> that redirects to the signin screen
 * if you're not yet authenticated.
 */
export const AuthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState();
  return (
    <Route
      {...props}
      render={(routeProps) =>
        isAuthenticated ? (
          <C {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
};

AuthenticatedRoute.propTypes = {
  component: PropTypes.elementType,
};

/**
 * A wrapper for <Route> that redirects to home page
 * if you are authenticated.
 */
export const UnauthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState();
  const location = useLocation();
  return (
    <Route
      {...props}
      render={(routeProps) =>
        !isAuthenticated ? (
          <C {...routeProps} />
        ) : (
          <Redirect
            to={location.state?.from.pathname || "/"}
            state={{ from: routeProps.location }}
          />
        )
      }
    />
  );
};

UnauthenticatedRoute.propTypes = {
  component: PropTypes.elementType,
};
