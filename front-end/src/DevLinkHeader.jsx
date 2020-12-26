import React from 'react';

import styled from '@emotion/styled';

import { colors } from './styles/common/designSystem';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: '10px',
  padding: '10px',
});

const LeftWrapper = styled.div({
  width: '50px',
  height: '50px',
  borderRadius: '100%',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const CenterWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  width: '90%',
  textAlign: 'left',
  '& p': {
    margin: '0',
    padding: '4px 10px',
    height: '-webkit-fill-available',
    fontFamily: 'system-ui',
  },
});

const FirstDevlinkerId = styled.p({
});

const CreatedAt = styled.p({
  color: colors.gray.dark,
  fontSize: '12px',

});

export default function DevLinkHeader({ devLink }) {
  const { firstDevlinker, createdAt } = devLink;

  return (
    <Wrapper>
      <LeftWrapper>
        <img id="first-devlinker-img" src={firstDevlinker.img} alt="프로필 사진" />
      </LeftWrapper>
      <CenterWrapper>
        <FirstDevlinkerId>{firstDevlinker.id}</FirstDevlinkerId>
        <CreatedAt>{createdAt}</CreatedAt>
      </CenterWrapper>
    </Wrapper>
  );
}
