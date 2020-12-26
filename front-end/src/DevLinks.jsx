import React from 'react';

import styled from '@emotion/styled';

import DevLink from './DevLink'; // TODO : 수정 필요

import { isEmpty } from './common/utils';

import { devLink } from '../../fixture/data'; // TODO : 삭제 필요

const Wrapper = styled.div({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: '5rem',
  padding: '0 10rem',
});

export default function DevLinks({ devLinks }) {
  if (isEmpty(devLinks || [])) {
    return <p>로딩중....</p>;
  }

  return (
    <Wrapper>
      {/* TODO : DB에 저장된 데이터 구조 수정 필요! */}
      <DevLink devLink={devLink} />
      <DevLink devLink={devLink} />
      <DevLink devLink={devLink} />
      <DevLink devLink={devLink} />
      <DevLink devLink={devLink} />
      <DevLink devLink={devLink} />
      <DevLink devLink={devLink} />
      <DevLink devLink={devLink} />
      <DevLink devLink={devLink} />
      <DevLink devLink={devLink} />
      <DevLink devLink={devLink} />
      <DevLink devLink={devLink} />

      {/* {devLinks.map((devLink) => (
        <DevLink2 key={devLink.id} devLink={devLink} />
      ))} */}
    </Wrapper>
  );
}
//
