import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import { devLinks } from '../fixture/data';

jest.mock('react-redux');

describe('<App />', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  context('with devlinks', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        devlinks: devLinks,
      }));
    });

    it('renders devlinks', () => {
      const { container } = render(
        <App />,
      );

      expect(container).toHaveTextContent(/#Dev/i);

      expect(dispatch).toBeCalled();

      expect(container).toHaveTextContent(devLinks[0].keyword.name);

      devLinks[0].subjects.forEach(({ name }, index) => {
        if (index < 3) {
          expect(container).toHaveTextContent(name);
        }

        if (index === 4) {
          expect(container).toHaveTextContent('...');
        }

        return null;
      });

      devLinks[0].reviews.forEach(({ name }, index) => {
        expect(container).toHaveTextContent(name);

        if (index < 4) {
          expect(container).toHaveTextContent(name);
        }

        if (index === 5) {
          expect(container).toHaveTextContent('...');
        }

        return null;
      });
    });
  });

  context('without devlinks', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        devlinks: null,
      }));
    });

    it('renders devlinks loading..', () => {
      const { container } = render(
        <App />,
      );

      expect(dispatch).toBeCalled();

      expect(container).toHaveTextContent('로딩중....');
    });
  });
});
