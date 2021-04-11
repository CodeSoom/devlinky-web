import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import DevLinkBody from './DevLinkBody';

import { devLink } from '../../../fixture/data';

describe('<DevLinkBody />', () => {
  context('with devLink', () => {
    it('show devLink', () => {
      const { container, getByAltText } = render(<DevLinkBody devLink={devLink} />);

      devLink.tags.forEach((tag) => expect(container).toHaveTextContent(tag));
      expect(getByAltText(`${devLink.title} 링크 썸네일`)).toHaveAttribute('src', devLink.thumbnail);
      expect(container).toHaveTextContent(devLink.title);
    });
  });

  context('without devLink', () => {
    it('show loading..', () => {
      const { container } = render(<DevLinkBody devLink={null} />);

      expect(container).toHaveTextContent('로딩중....');
    });
  });

  context('when user clicks DevLinkCard', () => {
    it('opens new window', () => {
      global.window.open = jest.fn();

      const { getByText } = render(<DevLinkBody devLink={devLink} />);

      fireEvent.click(getByText(devLink.title));

      expect(global.window.open).toBeCalled();
    });
  });
});
