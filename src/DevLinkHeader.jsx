import React from 'react';

import styled from '@emotion/styled';

import { colors, textStyles } from './styles/common/designSystem';

const { title } = textStyles;

const DevLinkHeaderWrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '0px 2px',
});

const Keywords = styled.div({
  flex: '1.5',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const Keyword = styled.div(({ objectColor }) => ({
  color: objectColor,
  alignItems: 'center',
  backgroundColor: colors.white,
  '& img': {
    width: '15px',
    marginRight: '1px',
    display: 'inline-block',
    verticalAlign: 'center',
    backgroundColor: 'inherit',
  },
  '& span': {
    color: objectColor,
    fontFamily: title.fontFamily,
    fontSize: title.fontSize,
    fontWeight: title.fontWeight,
    letterSpacing: title.letterSpacing,
    backgroundColor: 'inherit',
  },
}));

const WrittenAt = styled.span({
  flex: '0.5',
  color: colors.blue.dark,
  fontSize: '25px',
  fontWeight: 'bolder',
  letterSpacing: '1px',
});

export default function DevLinkHeader({ devLink }) {
  const { keyword, writtenAt } = devLink;

  return (
    <DevLinkHeaderWrapper>
      <Keywords>
        <Keyword objectColor={keyword.color}>
          <span>{keyword.name}</span>
        </Keyword>
      </Keywords>
      <WrittenAt>{writtenAt}</WrittenAt>
    </DevLinkHeaderWrapper>
  );
}
