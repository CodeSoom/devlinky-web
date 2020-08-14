import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import NotFoundPage from './NotFoundPage';

export default function App() {
  // const dispatch = useDispatch();
  // const accessToken = loadItem('accessToken');

  // if (accessToken) {
  //   dispatch(setAccessToken(accessToken));
  // }
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
