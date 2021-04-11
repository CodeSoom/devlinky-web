import React from 'react';

import styled from '@emotion/styled';

import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import NotFoundPage from './pages/NotFoundPage';

const Wrapper = styled.div({
  margin: '1em 7em',

});

export default function App() {
  return (
    <Wrapper>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/user/:devLinkerId" component={UserPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Wrapper>
  );
}
