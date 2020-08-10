import React from 'react';

import {
  DevLinkHeaderContainer,
  Keywords,
  Keyword,
  WrittenAt,
} from './styles/DevLinks';

export default function DevLinkHeader({ devLink }) {
  const { keyword, writtenAt } = devLink;

  return (
    <DevLinkHeaderContainer>
      <Keywords>
        <Keyword objectColor={keyword.color}>
          <span>{keyword.name}</span>
        </Keyword>
      </Keywords>
      <WrittenAt>{writtenAt}</WrittenAt>
    </DevLinkHeaderContainer>
  );
}
