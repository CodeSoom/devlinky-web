import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import HomePage from './HomePage';

import { devLinks } from '../fixture/data';

jest.mock('react-redux');

describe('<HomePage />', () => {
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

    it('renders without crash', () => {
      const { container } = render(
        <HomePage />,
      );

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

    it('show loading..', () => {
      const { container } = render(
        <HomePage />,
      );

      expect(dispatch).toBeCalled();

      expect(container).toHaveTextContent('로딩중....');
    });
  });
});
