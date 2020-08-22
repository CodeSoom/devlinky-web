import React from 'react';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

jest.mock('react-redux');

test('LoginPage ', () => {
  const { container } = render(
    <LoginPage />,
  );

  expect(container).toHaveTextContent('Login');
});
