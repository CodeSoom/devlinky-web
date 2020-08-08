import styled from '@emotion/styled';

import React from 'react';

import { colors } from './styles/common/designSystem';

import HomePage from './HomePage';

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
        <span>#Dev</span>
      </Headers>
      <div>
        <HomePage />
      </div>
    </>
  );
}
