import React from 'react';

import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';

import { colors } from './styles/common/designSystem';

import { get } from './common/utils';

import { firebase, githubAuthProvider } from '../config/firebase/firebase';

import { setAccessToken, setUserInfo } from './common/slice';

const HeaderWrapper = styled.header({
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

  const accessToken = useSelector(get('accessToken'));
  const userInfo = useSelector(get('userInfo'));

  const handleClickLogin = () => {
    githubAuthProvider.addScope('repo');

    firebase
      .auth()
      .signInWithPopup(githubAuthProvider)
      .then((result) => {
        const token = result.credential.accessToken;

        const { email, photoURL } = result.user;

        dispatch(setAccessToken(token));
        dispatch(setUserInfo({
          id: email,
          img: photoURL,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickLogout = () => {

  };

  return (
    <HeaderWrapper>
      <span>#Dev</span>
      {accessToken && userInfo && (
        <button type="button" onClick={handleClickLogout}>
          로 그 아 웃
        </button>
      )}
      {!accessToken && !userInfo && (
        <button type="button" onClick={handleClickLogin}>
          로 그 인
        </button>
      )}
    </HeaderWrapper>
  );
}
