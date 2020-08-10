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

  context('with devLinks', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        devLinks,
      }));
    });

    it('renders devLinks', () => {
      const { container } = render(
        <App />,
      );

      expect(container).toHaveTextContent(/#Dev/i);

      expect(dispatch).toBeCalled();

      expect(container).toHaveTextContent(devLinks[0].keyword.name);

      devLinks[0].tags.forEach((tag) => expect(container).toHaveTextContent(tag.name));

      devLinks[0].reviews.forEach((review) => expect(container).toHaveTextContent(review.name));
    });
  });

  context('without devLinks', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        devLinks: null,
      }));
    });

    it('renders devLinks loading..', () => {
      const { container } = render(
        <App />,
      );

      expect(dispatch).toBeCalled();

      expect(container).toHaveTextContent('로딩중....');
    });
  });
});
