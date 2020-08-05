import React from 'react';

import { render } from '@testing-library/react';

import DevLinkHeader from './DevLinkHeader';

import { devLink } from '../fixture/data';

describe('<DevLinkHeader />', () => {
  it('renders without crash', () => {
    const { container } = render(<DevLinkHeader devLink={devLink} />);

    expect(container).toHaveTextContent(devLink.keyword.name);
    expect(container).toHaveTextContent(devLink.writtenAt);
  });
});
