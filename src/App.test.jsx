import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('<App /> ', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const { container } = render(<App />);

  expect(container).toHaveTextContent(/#Dev/i);

  expect(dispatch).toBeCalled();
});
