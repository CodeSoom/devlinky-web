import React from 'react';

import styled from '@emotion/styled';

const Wrapper = styled.div({
  height: '100%',
  padding: '0px 50px',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 10em',
});
const TopWrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  borderBottom: '#dcdc 1px solid',

});

const TopLeftWrapper = styled.div({
  padding: '0 4em 4em 4em',
});

const ImgWrapper = styled.div({
  width: '12em',
  height: '12em',
  borderRadius: '100%',
  overflow: 'hidden',
  border: '#dcdc 1px solid',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const TopRightWrapper = styled.div({
  '& div': {
    margin: '0 4em',
    '& span': {
      fontSize: '2em',
      fontFamily: 'system-ui',
    },
  },
});

export default function UserInfo({ userInfo }) {
  return (
    <Wrapper>
      <TopWrapper>
        <TopLeftWrapper>
          <ImgWrapper>
            <img id="user-img" src={userInfo.githubProfile} alt={userInfo.githubId} />
          </ImgWrapper>
        </TopLeftWrapper>
        <TopRightWrapper>
          <div>
            <span>{userInfo.githubId}</span>
          </div>
        </TopRightWrapper>
      </TopWrapper>
    </Wrapper>
  );
}
