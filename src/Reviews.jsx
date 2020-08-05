import React from 'react';

import {
  ReviewsContainer,
} from './styles/DevLinks';

export default function Reviews({ reviews }) {
  return (
    <ReviewsContainer>
      {reviews.map((reviewItem, index) => {
        if (index < 4) {
          return (
            <button type="button" key={reviewItem.id}>
              #
              {reviewItem.name}
            </button>
          );
        }
        if (index === 5) {
          return (
            <button type="button" key={reviewItem.id}>
              ...
            </button>
          );
        }
        return null;
      })}
    </ReviewsContainer>
  );
}
