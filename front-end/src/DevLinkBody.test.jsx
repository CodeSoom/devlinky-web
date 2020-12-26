import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import DevLinkBody from './DevLinkBody';

import { devLink } from '../../fixture/data';

describe('<DevLinkBody />', () => {
  it('show devLink', () => {
    const { container, getByAltText } = render(<DevLinkBody devLink={devLink} />);

    devLink.tags.forEach((tag) => expect(container).toHaveTextContent(tag.name));
    expect(getByAltText('링크 썸네일')).toHaveAttribute('src', devLink.thumbnamil);
    expect(container).toHaveTextContent(devLink.title);
  });

  it('call global.window.open', () => {
    global.window.open = jest.fn();

    const { getByText } = render(<DevLinkBody devLink={devLink} />);

    fireEvent.click(getByText(devLink.title));

    expect(global.window.open).toBeCalled();
  });
});
