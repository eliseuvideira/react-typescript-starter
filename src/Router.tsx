import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from './pages/index';
import About from './pages/about';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/" component={Index} />
    </Switch>
  </BrowserRouter>
);

export default Router;
