import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { login, setAccessToken, logout } from '../redux/slice';

import { loadItem } from '../services/storage/localStorage';

import Header from './Header';

import { user, accessToken } from '../../../../fixture/data';

jest.mock('react-redux');
jest.mock('../redux/slice');
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
      loadItem.mockImplementation(() => (JSON.stringify(accessToken)));

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

      expect(dispatch).toBeCalledWith(setAccessToken(accessToken));
    });
  });

  context('with token and currentUser in localStorage && with accessToken and useInfo', () => {
    beforeEach(() => {
      useDispatch.mockImplementation(() => dispatch);
      loadItem.mockImplementation(() => (JSON.stringify(accessToken)));

      loadItem.mockImplementation(() => (JSON.stringify(user)));

      useSelector.mockImplementation((selector) => selector({
        accessToken,
        userInfo: user,
      }));
    });

    it('show logout button && userInfo', () => {
      const { container, getByAltText } = render(
        <MemoryRouter initialEntries={['/']}>
          <Header />
        </MemoryRouter>,
      );

      expect(container).toHaveTextContent(/#Dev/i);
      expect(getByAltText(`${user.githubId}`)).toHaveAttribute('src', user.githubProfile);
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
        accessToken,
        userInfo: user,
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
