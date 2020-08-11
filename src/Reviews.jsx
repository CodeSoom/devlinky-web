import React from 'react';

import styled from '@emotion/styled';

import { colors, textStyles } from './styles/common/designSystem';

const { note } = textStyles;

const ReviewsContainer = styled.span({
  display: 'flex',
  flexDirection: 'row',
  '& button': {
    margin: '2px',
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    border: `1.5px solid ${colors.blue.sky}`,
    backgroundColor: colors.white,
    color: note.color,
    fontFamily: note.fontFamily,
    fontSize: note.fontSize,
    letterSpacing: note.letterSpacing,
    ': hover': {
      backgroundColor: colors.blue.sky,
      color: colors.white,
    },
    ': focus': {
      outlineStyle: 'none',
      borderRadius: '50%',
      backgroundColor: colors.blue.sky,
      color: colors.white,
    },
  },
});

export default function Reviews({ reviews }) {
  return (
    <ReviewsContainer>
      {reviews.map((review) => (
        <button type="button" key={review.id}>
          #
          {review.name}
        </button>
      ))}
    </ReviewsContainer>
  );
}
