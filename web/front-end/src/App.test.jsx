import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import { user } from '../../../fixture/data';

jest.mock('react-redux');
jest.mock('./services/firebase/firebase.js');

describe('App with router', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      devLinkerInfo: user,
    }));
  });

  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );
  }

  context('with any path ', () => {
    it('shows App name', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent(/#Dev/i);
      expect(container).toHaveTextContent(/로 그 인/i);
    });
  });

  context('with path /', () => {
    it('shows devlinks', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('로딩중');
    });
  });

  context('with path /user/devlinker', () => {
    it('shows devlinkerInfo', () => {
      const { container, getByAltText } = renderApp({ path: '/user/devlinker' });

      expect(getByAltText(`${user.githubId}`)).toHaveAttribute('src', user.githubProfile);
      expect(container).toHaveTextContent(user.githubId);
    });
  });

  context('with invalid path', () => {
    it('renders the not found page', () => {
      const { container } = renderApp({ path: '/xxx' });

      expect(container).toHaveTextContent('Not Found');
    });
  });
});
