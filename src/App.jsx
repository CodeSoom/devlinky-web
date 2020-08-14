import React from 'react';

import styled from '@emotion/styled';

import { Switch, Route, Link } from 'react-router-dom';

import { colors } from './styles/common/designSystem';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import NotFoundPage from './NotFoundPage';

const Headers = styled.header({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px 50px',
  '& span': {
    textDecoration: 'underline',
    fontSize: '30px',
  },
  '& button': {
    border: `1.5px solid ${colors.blue.dark}`,
    borderRadius: '7px',
    padding: '5px 20px',
    backgroundColor: colors.blue.dark,
    color: colors.white,
    ':hover': {
      backgroundColor: colors.white,
      color: colors.blue.dark,
    },
  },
});

export default function App() {
  return (
    <>
      <Headers>
        <Link to="/">
          <span>#Dev</span>
        </Link>
        <Link to="/login">
          <button type="button">
            로 그 인
          </button>
        </Link>
      </Headers>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
