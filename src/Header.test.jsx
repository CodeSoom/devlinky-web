import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import Header from './Header';

jest.mock('react-redux');

test('<Header />', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  useSelector.mockImplementation((selector) => selector({
    accessToken: '',
  }));

  const { container, getByText } = render(
    <Header />,
  );

  expect(container).toHaveTextContent(/#Dev/i);

  fireEvent.click(getByText('로 그 인'));
});
