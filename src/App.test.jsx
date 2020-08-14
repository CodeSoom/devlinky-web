import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App with router', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('with any path ', () => {
    it('shows header', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent(/#Dev/i);
      expect(container).toHaveTextContent(/로 그 인/i);
    });
  });

  context('with path /', () => {
    it('shows loading message', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('로딩중');
    });
  });

  context('with path /login', () => {
    it('shows page name', () => {
      const { container } = renderApp({ path: '/login' });

      expect(container).toHaveTextContent('Login');
    });
  });

  context('with invalid path', () => {
    it('renders the not found page', () => {
      const { container } = renderApp({ path: '/xxx' });

      expect(container).toHaveTextContent('Not Found');
    });
  });
});
