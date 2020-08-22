import React from 'react';

import { render } from '@testing-library/react';

import DevLink from './DevLink';

import { devLinks } from '../../fixture/data';

describe('<DevLink />', () => {
  const devLink = devLinks[0];

  context('with devLink', () => {
    it('show devLink', () => {
      const { container } = render(<DevLink devLink={devLink} />);

      const { keyword, tags, reviews } = devLink;

      expect(container).toHaveTextContent(keyword.name);

      tags.forEach((tag) => expect(container).toHaveTextContent(tag.name));

      reviews.forEach((review) => expect(container).toHaveTextContent(review.name));
    });
  });

  context('without devLink', () => {
    it('show loading..', () => {
      const { container } = render(<DevLink devLink={null} />);

      expect(container).toHaveTextContent('로딩중....');
    });
  });
});
