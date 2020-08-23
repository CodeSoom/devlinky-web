import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { login, setAccessToken, logout } from './common/slice';

import { loadItem } from '../services/storage/localStorage';

import Header from './Header';

jest.mock('react-redux');
jest.mock('./common/slice');
jest.mock('../services/firebase/firebase.js');
jest.mock('../services/storage/localStorage');

describe('<Header />', () => {
  const dispatch = jest.fn();

  context('without token in localStorage', () => {
    beforeEach(() => {
      useDispatch.mockImplementation(() => dispatch);
      loadItem.mockImplementation(() => null);
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

  context('with token in localStorage && without accessToken and useInfo', () => {
    beforeEach(() => {
      useDispatch.mockImplementation(() => dispatch);
      loadItem.mockImplementation(() => ({
        github: 'GITHUB_ACCESS_TOKEN',
        firebase: 'FIREBASE_ACCESS_TOKEN',
      }));

      useSelector.mockImplementation((selector) => selector({
        accessToken: null,
        userInfo: null,
      }));
    });

    it('occurs dispatch', () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Header />
        </MemoryRouter>,
      );

      expect(dispatch).toBeCalledWith(setAccessToken({
        github: 'GITHUB_ACCESS_TOKEN',
        firebase: 'FIREBASE_ACCESS_TOKEN',
      }));
    });
  });

  context('with token in localStorage && with accessToken and useInfo', () => {
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

  context('when logout button is clicked', () => {
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

    it('occur login', () => {
      const { getByText } = render(
        <MemoryRouter initialEntries={['/']}>
          <Header />
        </MemoryRouter>,
      );

      fireEvent.click(getByText('로 그 아 웃'));
      expect(dispatch).toBeCalledWith(logout());
    });
  });
});
