import React from 'react';

import { render } from '@testing-library/react';

import DevLinkHeader from './DevLinkHeader';

import { devLink } from '../../fixture/data';

describe('<DevLinkHeader />', () => {
  it('show DevLinkHeader', () => {
    const { keyword, writtenAt } = devLink;

    const { container } = render(<DevLinkHeader devLink={devLink} />);

    expect(container).toHaveTextContent(keyword.name);
    expect(container).toHaveTextContent(writtenAt);
  });
});
