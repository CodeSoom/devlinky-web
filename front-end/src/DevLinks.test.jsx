import React from 'react';

import { render } from '@testing-library/react';

import DevLinks from './DevLinks';

import { devLink, devLinks } from '../../fixture/data';

describe('<DevLinks />', () => {
  context('with devLinks', () => {
    it('show devLink', () => {
      const { container } = render(<DevLinks devLinks={devLinks} />);

      expect(container).toHaveTextContent(devLink.firstDevlinker.id);
      expect(container).toHaveTextContent(devLink.createdAt);

      devLink.tags.forEach((tag) => expect(container).toHaveTextContent(tag.name));

      expect(container).toHaveTextContent(devLink.title);

      expect(container).toHaveTextContent('좋아요');
      expect(container).toHaveTextContent('맨션');
      expect(container).toHaveTextContent('북마크');
    });
  });

  context('without devLinks', () => {
    it('show loading..', () => {
      const { container } = render(<DevLinks devLinks={null} />);

      expect(container).toHaveTextContent('로딩중....');
    });
  });
});
