import React from 'react';

import {
  DevLinkHeaderContainer,
  Keywords,
  Keyword,
  WrittenAt,
} from './styles/DevLinks';

export default function DevLinkHeader({ devLink }) {
  return (
    <DevLinkHeaderContainer>
      <Keywords>
        <Keyword objectColor={devLink.keyword.color}>
          <span>{devLink.keyword.name}</span>
        </Keyword>
      </Keywords>
      <WrittenAt>{devLink.writtenAt}</WrittenAt>
    </DevLinkHeaderContainer>
  );
}
