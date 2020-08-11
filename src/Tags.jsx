import React from 'react';

import styled from '@emotion/styled';

import { colors, textStyles } from './styles/common/designSystem';

const { subTitle } = textStyles;

const TagsContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  '& button': {
    margin: '4px 2px',
    borderRadius: '5px',
    border: `1px solid ${colors.orange}`,
    padding: '2px 10px',
    color: subTitle.color,
    fontFamily: subTitle.fontFamily,
    fontSize: subTitle.fontSize,
    letterSpacing: subTitle.letterSpacing,
    backgroundColor: colors.white,
    ': hover': {
      backgroundColor: colors.orange,
      color: colors.white,
    },
    ': focus': {
      outlineStyle: 'none',
      backgroundColor: colors.orange,
      color: colors.white,
    },
  },
});

export default function Tags({ tags }) {
  return (
    <TagsContainer>
      {tags.map((tag) => (
        <button type="button" key={tag.id}>
          #
          {tag.name}
        </button>
      ))}
    </TagsContainer>
  );
}
