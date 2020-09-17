import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import PublicRoute from './public-route';
import AuthenticatedRoute from './authenticated-route';

import LoginPage from '../pages/login';
import ChatPage from '../pages/chat';
import NotFoundPage from '../pages/not-found';

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <PublicRoute path="/login" component={LoginPage} />
        <AuthenticatedRoute path="/" component={ChatPage} exact />
        <AuthenticatedRoute component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
