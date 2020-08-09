import styled from '@emotion/styled';

import React from 'react';

import HomePage from './HomePage';

const Headers = styled.header({
  padding: '20px 50px',
  textDecoration: 'underline',
  fontSize: '30px',
});

export default function App() {
  return (
    <>
      <Headers>#Dev</Headers>
      <div>
        <HomePage />
      </div>
    </>
  );
}
