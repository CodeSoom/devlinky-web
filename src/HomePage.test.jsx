import React from 'react';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

import { devLinks } from '../fixture/data';

test('<HomePage />', () => {
  const { container } = render(<HomePage />);

  expect(container).toHaveTextContent(devLinks[0].object.name);

  devLinks[0].subjects.forEach(({ name }, index) => {
    if (index < 3) {
      expect(container).toHaveTextContent(name);
    }

    if (index === 4) {
      expect(container).toHaveTextContent('...');
    }

    return null;
  });

  devLinks[0].reviews.forEach(({ name }, index) => {
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
