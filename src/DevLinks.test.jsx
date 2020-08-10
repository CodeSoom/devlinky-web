import React from 'react';

import { render } from '@testing-library/react';

import DevLinks from './DevLinks';

import { devLinks } from '../fixture/data';

describe('<DevLinks />', () => {
  context('with devLinks', () => {
    it('show devLinks', () => {
      const { container } = render(<DevLinks devLinks={devLinks} />);

      devLinks.forEach((devLink) => {
        const { keyword, tags, reviews } = devLink;

        expect(container).toHaveTextContent(keyword.name);

        tags.forEach((tag) => expect(container).toHaveTextContent(tag.name));

        reviews.forEach((review) => expect(container).toHaveTextContent(review.name));
      });
    });
  });

  context('without devLinks', () => {
    it('show loading..', () => {
      const { container } = render(<DevLinks devLinks={null} />);

      expect(container).toHaveTextContent('로딩중....');
    });
  });
});
