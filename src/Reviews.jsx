import React from 'react';

import {
  ReviewsContainer,
} from './styles/DevLinks';

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
