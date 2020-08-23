import React from 'react';

import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { colors } from './styles/common/designSystem';

import { login } from './common/slice';

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

  const accessToken = useSelector(get('accessToken'));

  const userInfo = useSelector(get('userInfo'));

  const handleClickLogin = () => {
    dispatch(login());
  };

  return (
    <Wrapper>
      <Link to="/">
        <span>#Dev</span>
      </Link>
      <h1>{userInfo ? `${userInfo.email} 님 반갑습니다` : ''}</h1>

      {accessToken ? (
        <button type="button">로 그 아 웃</button>
      ) : (
        <button type="button" onClick={handleClickLogin}>
          로 그 인
        </button>
      )}
    </Wrapper>
  );
}
