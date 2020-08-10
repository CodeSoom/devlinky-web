import React from 'react';

import {
  ReviewsContainer,
} from './styles/DevLinks';

export default function Reviews({ reviews }) {
  return (
    <ReviewsContainer>
      {reviews.map((reviewItem) => (
        <button type="button" key={reviewItem.id}>
          #
          {reviewItem.name}
        </button>
      ))}
    </ReviewsContainer>
  );
}
