import React from 'react';

import { render } from '@testing-library/react';

import DevLinkHeader from './DevLinkHeader';

import { devLink } from '../../../fixture/data';

describe('<DevLinkHeader />', () => {
  it('show DevLinkHeader', () => {
    const { firstDevLinker, createdAt } = devLink;

    const { container, getByAltText } = render(<DevLinkHeader devLink={devLink} />);

    expect(container).toHaveTextContent(firstDevLinker.githubId);
    expect(getByAltText('프로필 사진')).toHaveAttribute('src', firstDevLinker.githubProfile);
    expect(container).toHaveTextContent(createdAt);
  });
});
