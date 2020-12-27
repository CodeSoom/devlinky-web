import React from 'react';

import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { colors } from './styles/common/designSystem';

import {
  login, setAccessToken, logout, setUserInfo,
} from './common/slice';

import { loadItem } from '../services/storage/localStorage';

import { get } from './common/utils';

const Wrapper = styled.header({
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

export default function Header() {
  const dispatch = useDispatch();

  const localToken = loadItem('accessToken');
  const currentUser = loadItem('currentUser');

  const accessToken = useSelector(get('accessToken'));
  const userInfo = useSelector(get('userInfo'));

  if (localToken && !(accessToken)) {
    dispatch(setAccessToken(JSON.parse(localToken)));
  }

  if (currentUser && !(userInfo)) {
    dispatch(setUserInfo(JSON.parse(currentUser)));
  }

  const handleClickLogin = () => {
    dispatch(login());
  };

  const handleClickLogout = () => {
    dispatch(logout());
  };

  return (
    <Wrapper>
      <Link to="/">
        <span>#Dev</span>
      </Link>
      <h1>{userInfo ? `${userInfo.githubId} 님 반갑습니다` : ''}</h1>

      {userInfo ? (
        <button type="button" onClick={handleClickLogout}>로 그 아 웃</button>
      ) : (
        <button type="button" onClick={handleClickLogin}>
          로 그 인
        </button>
      )}
    </Wrapper>
  );
}
