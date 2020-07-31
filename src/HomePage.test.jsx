import React from 'react';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

import { devLinks } from '../fixture/data';

test('<HomePage />', () => {
  const { container } = render(<HomePage />);

  expect(container).toHaveTextContent(devLinks[0].object.name);

  devLinks[0].subjects.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });

  devLinks[0].reviews.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });
});
