import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import DevLinksContainer from './DevLinksContainer';

import { devLinks } from '../fixture/data';

jest.mock('react-redux');

describe('<DevLinksContainer />', () => {
  context('with devlinks', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        devlinks: devLinks,
      }));
    });

    it('renders without crash', () => {
      const { container } = render(
        <DevLinksContainer />,
      );

      expect(container).toHaveTextContent(devLinks[0].keyword.name);

      devLinks[0].tags.forEach((tag) => expect(container).toHaveTextContent(tag.name));

      devLinks[0].reviews.forEach((review) => expect(container).toHaveTextContent(review.name));
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
        <DevLinksContainer />,
      );

      expect(container).toHaveTextContent('로딩중....');
    });
  });
});
