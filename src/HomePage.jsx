import styled from '@emotion/styled';

import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadInitialData } from './common/slice';

import get from './common/utils';

import DevLinksContainer from './DevLinksContainer';

const HomePageContainer = styled.div({
  height: '100vh',
  padding: '0px 50px',
  display: 'flex',
  flexDirection: 'column',
});

export default function HomePage() {
  const dispatch = useDispatch();

  const devLinks = useSelector(get('devlinks'));

  useEffect(() => {
    dispatch(loadInitialData());
  }, []);

  if (!devLinks) {
    return (
      <HomePageContainer>
        <p>로딩중....</p>
      </HomePageContainer>
    );
  }

  return (
    <HomePageContainer>
      <DevLinksContainer />
    </HomePageContainer>
  );
}
