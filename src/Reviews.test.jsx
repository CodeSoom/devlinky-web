import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

import { devLink } from '../fixture/data';

describe('<Reviews />', () => {
  it('renders without crash', () => {
    const { container } = render(<Reviews reviews={devLink.reviews} />);

    devLink.reviews.forEach(({ name }, index) => {
      expect(container).toHaveTextContent(name);

      if (index < 4) {
        expect(container).toHaveTextContent(name);
      }

      if (index === 5) {
        expect(container).toHaveTextContent('...');
      }

      return null;
    });
  });
});
