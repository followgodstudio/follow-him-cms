import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


import * as ROUTES from '../../routes';
import { withAuthentication } from '../Session';

import AdminLayout from "../../layouts/Admin.js";
import AuthLayout from "../../layouts/Auth.js";

const App = () => (
      <BrowserRouter>

        <Switch>
          <Route path="/admin" render={props => <AdminLayout {...props} />} />

          <Route path="/auth" render={props => <AuthLayout {...props} />} />

          <Redirect from="/" to="/auth/login" />
        </Switch>

    </BrowserRouter>
);

export default withAuthentication(App);
