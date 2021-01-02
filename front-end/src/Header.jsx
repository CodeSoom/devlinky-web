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
    marginTop: '3px',
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

const ImgWrapper = styled.div({
  width: '50px',
  height: '50px',
  borderRadius: '100%',
  overflow: 'hidden',
  border: '#dcdc 1px solid',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const UserInfoWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
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
      {userInfo ? (
        <UserInfoWrapper>
          <ImgWrapper>
            <Link to={`/user/${userInfo.githubId}`}>
              <img id="first-devlinker-img" src={userInfo.githubProfile} alt={userInfo.githubId} />
            </Link>
          </ImgWrapper>
          <button type="button" onClick={handleClickLogout}>로 그 아 웃</button>
        </UserInfoWrapper>
      ) : (
        <button type="button" onClick={handleClickLogin}>
          로 그 인
        </button>
      )}
    </Wrapper>
  );
}
