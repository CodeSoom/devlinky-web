import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { login } from './common/slice';

import Header from './Header';

jest.mock('react-redux');
jest.mock('./common/slice');
jest.mock('../services/firebase/firebase.js');

describe('<Header />', () => {
  const dispatch = jest.fn();

  context('without accessToken', () => {
    beforeEach(() => {
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        accessToken: null,
        userInfo: null,
      }));
    });

    it('show login button', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/']}>
          <Header />
        </MemoryRouter>,
      );

      expect(container).toHaveTextContent(/#Dev/i);
      expect(container).toHaveTextContent('로 그 인');
    });
  });

  context('with accessToken', () => {
    beforeEach(() => {
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        accessToken: {
          github: 'GITHUB_ACCESS_TOKEN',
          firebase: 'FIREBASE_ACCESS_TOKEN',
        },
        userInfo: {
          uid: 'uid',
          email: 'email',
          photoURL: 'photoURL',
        },
      }));
    });

    it('show logout button', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/']}>
          <Header />
        </MemoryRouter>,
      );

      expect(container).toHaveTextContent(/#Dev/i);
      expect(container).toHaveTextContent('로 그 아 웃');
    });
  });

  context('when login button is clicked', () => {
    beforeEach(() => {
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        accessToken: null,
        userInfo: null,
      }));
    });

    it('occur login', () => {
      const { getByText } = render(
        <MemoryRouter initialEntries={['/']}>
          <Header />
        </MemoryRouter>,
      );

      fireEvent.click(getByText('로 그 인'));
      expect(dispatch).toBeCalledWith(login());
    });
  });
});
