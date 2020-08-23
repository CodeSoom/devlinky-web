import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Header from './Header';

import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
