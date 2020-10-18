import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../routes';
import AuthUserContext from './context';

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
          authUser => {
            if (!condition(authUser)) {
              this.props.history.push("/auth" + ROUTES.LOGIN);
            }
          },
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
          <AuthUserContext.Consumer>
            {authUser =>
                condition(authUser) ? <Component {...this.props} authUser={authUser}/> : null
            }
          </AuthUserContext.Consumer>
      );
    }
  }

  return compose(
      withRouter,
      withFirebase,
  )(WithAuthorization);
};

export default withAuthorization;