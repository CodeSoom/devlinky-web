import React from 'react';

import styled from '@emotion/styled';

import { colors } from './styles/common/designSystem';

import DevLinkHeader from './DevLinkHeader';
import DevLinkBody from './DevLinkBody';

import { isEmpty } from './common/utils';

const Wrapper = styled.div({
  margin: '10px',
  padding: '5px 8px',
  borderRadius: '5px',
  backgroundColor: colors.white,
  width: '25rem',
  textAlign: 'center',
  boxShadow: `0px 4px 16px 0px ${colors.shadow}`,
  ': hover': {
    boxShadow: `0px 8px 32px 2px ${colors.shadow}`,
    borderRadius: '4px',
    transition: 'box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s',
  },
});

export default function DevLink({ devLink }) {
  if (isEmpty(devLink || [])) {
    return <p>로딩중....</p>;
  }

  return (
    <Wrapper>
      <DevLinkHeader devLink={devLink} />
      <DevLinkBody devLink={devLink} />
    </Wrapper>
  );
}
