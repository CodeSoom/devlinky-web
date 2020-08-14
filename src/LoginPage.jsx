import React from 'react';

import styled from '@emotion/styled';

const LoginPageWrapper = styled.div({
  height: '100vh',
  padding: '0px 50px',
  display: 'flex',
  flexDirection: 'column',
  '& span': {
    marginTop: '50px',
    textAlign: 'center',
    fontSize: '40px',

  },
});

export default function LoginPage() {
  return (
    <LoginPageWrapper>
      <span>Login 페이지는 준비중입니다</span>
      <span>#Dev(v2)를 기대해주세요 &#x1F603; </span>
      {/* <button type="button" onClick={() => signInWithGithub()}>Sign in with Google</button> */}
    </LoginPageWrapper>
  );
}
