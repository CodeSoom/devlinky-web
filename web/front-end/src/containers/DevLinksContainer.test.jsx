import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import DevLinksContainer from './DevLinksContainer';

import { devLinks } from '../../../../fixture/data';

jest.mock('react-redux');

describe('<DevLinksContainer />', () => {
  context('with devLinks', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        devLinks,
      }));
    });

    it('show devLinks', () => {
      const { container, getByAltText } = render(
        <DevLinksContainer />,
      );

      devLinks.forEach((devLink) => {
        devLink.tags.forEach((tag) => expect(container).toHaveTextContent(tag));
        expect(getByAltText(`${devLink.title} 링크 썸네일`)).toHaveAttribute('src', devLink.thumbnail);
        expect(container).toHaveTextContent(devLink.title);
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
