import styled from '@emotion/styled';

import React from 'react';

import { mainColor, whiteColor } from './styles/colors';

import HomePage from './HomePage';

const Headers = styled.header({
  padding: '20px 50px',
  '& span': {
    textDecoration: 'underline',
    fontSize: '30px',
  },
  display: 'flex',
  justifyContent: 'space-between',
  '& button': {
    border: `1.5px solid ${mainColor}`,
    borderRadius: '7px',
    padding: '5px 20px',
    backgroundColor: mainColor,
    color: whiteColor,
    ':hover': {
      backgroundColor: whiteColor,
      color: mainColor,
    },
  },
});

export default function App() {
  return (
    <>
      <Headers>
        <span>#Dev</span>
        <button type="button">
          로 그 인
        </button>
      </Headers>
      <div>
        <HomePage />
      </div>
    </>
  );
}
