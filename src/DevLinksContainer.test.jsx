import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import DevLinksContainer from './DevLinksContainer';

import { devLinks } from '../fixture/data';

jest.mock('react-redux');

describe('<DevLinksContainer />', () => {
  context('with devLinks', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        devLinks,
      }));
    });

    it('show devLinks', () => {
      const { container } = render(
        <DevLinksContainer />,
      );

      devLinks.forEach((devLink) => {
        const { keyword, tags, reviews } = devLink;

        expect(container).toHaveTextContent(keyword.name);

        tags.forEach((tag) => expect(container).toHaveTextContent(tag.name));

        reviews.forEach((review) => expect(container).toHaveTextContent(review.name));
      });
    });
  });

  context('without devLinks', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        devLinks: null,
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
