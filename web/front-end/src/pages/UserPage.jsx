import React, { useEffect } from 'react';

import styled from '@emotion/styled';

import { useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import {
  loadDevLinkerInfo,
} from '../redux/slice';

import UserInfoContainer from '../containers/UserInfoContainer';

const Wrapper = styled.div({
  height: '100vh',
  padding: '0px 50px',
  display: 'flex',
  flexDirection: 'column',
});

export default function UserPage({ params }) {
  const dispatch = useDispatch();

  const { devLinkerId } = params || useParams();

  useEffect(() => {
    dispatch(loadDevLinkerInfo({ devLinkerGithubId: devLinkerId }));
  }, []);

  return (
    <Wrapper>
      <UserInfoContainer />
    </Wrapper>
  );
}
