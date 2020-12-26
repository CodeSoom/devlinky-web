import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import DevLinksContainer from './DevLinksContainer';

import { devLink, devLinks } from '../../fixture/data';

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
