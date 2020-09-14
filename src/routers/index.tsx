import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from '../pages/login';
import ChatPage from '../pages/chat';
import NotFoundPage from '../pages/not-found';

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={ChatPage} exact />
        <Route component={NotFoundPage} />
        <Route />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
