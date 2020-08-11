import styled from '@emotion/styled';

import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadInitialData } from './common/slice';

import DevLinksContainer from './DevLinksContainer';

const HomePageWrapper = styled.div({
  height: '100vh',
  padding: '0px 50px',
  display: 'flex',
  flexDirection: 'column',
});

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  }, []);

  return (
    <HomePageWrapper>
      <DevLinksContainer />
    </HomePageWrapper>
  );
}
