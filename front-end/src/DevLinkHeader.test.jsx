import React from 'react';

import { render } from '@testing-library/react';

import DevLinkHeader from './DevLinkHeader';

import { devLink } from '../../fixture/data';

describe('<DevLinkHeader />', () => {
  it('show DevLinkHeader', () => {
    const { firstDevlinker, createdAt } = devLink;

    const { container, getByAltText } = render(<DevLinkHeader devLink={devLink} />);

    expect(container).toHaveTextContent(firstDevlinker.id);
    expect(getByAltText('프로필 사진')).toHaveAttribute('src', firstDevlinker.img);
    expect(container).toHaveTextContent(createdAt);
  });
});
