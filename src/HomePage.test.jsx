import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import HomePage from './HomePage';

import { devLinks } from '../fixture/data';

import { loadInitialData } from './common/slice';

jest.mock('react-redux');
jest.mock('./common/slice.js');

test('HomePage ', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    devlinks: devLinks,
  }));

  render(
    <HomePage />,
  );

  expect(dispatch).toBeCalledWith(loadInitialData());
});
