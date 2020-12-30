import React from 'react';

import { render } from '@testing-library/react';

import DevLinks from './DevLinks';

import { devLinks } from '../../fixture/data';

describe('<DevLinks />', () => {
  context('with devLinks', () => {
    it('show devLinks', () => {
      const { container, getByAltText } = render(<DevLinks devLinks={devLinks} />);

      devLinks.forEach((devLink) => {
        devLink.tags.forEach((tag) => expect(container).toHaveTextContent(tag));
        expect(getByAltText(`${devLink.title} 링크 썸네일`)).toHaveAttribute('src', devLink.thumbnail);
        expect(container).toHaveTextContent(devLink.title);
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
