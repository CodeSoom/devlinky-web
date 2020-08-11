import React from 'react';

import styled from '@emotion/styled';

import DevLink from './DevLink';

import { isEmpty } from './common/utils';

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
});

export default function DevLinks({ devLinks }) {
  if (isEmpty(devLinks || [])) {
    return <p>로딩중....</p>;
  }

  return (
    <Wrapper>
      {devLinks.map((devLink) => (
        <DevLink key={devLink.id} devLink={devLink} />
      ))}
    </Wrapper>
  );
}
