import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import UserPage from './UserPage';

import { user } from '../../fixture/data';

jest.mock('react-redux');
jest.mock('../services/firebase/firebase.js');

test('UserPage ', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    devLinkerInfo: user,
  }));

  expect(dispatch).not.toBeCalled();

  render(
    <UserPage params={{ devLinkerId: user.devLinkerId }} />,
  );

  expect(dispatch).toBeCalledTimes(1);
});
