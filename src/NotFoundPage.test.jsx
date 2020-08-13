import React from 'react';

import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

jest.mock('react-redux');

test('NotFoundPage ', () => {
  const { container } = render(
    <NotFoundPage />,
  );

  expect(container).toHaveTextContent('404');
});
