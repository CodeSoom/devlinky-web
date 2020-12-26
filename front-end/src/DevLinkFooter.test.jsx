import React from 'react';

import { render } from '@testing-library/react';

import DevLinkFooter from './DevLinkFooter';

import { devLink } from '../../fixture/data';

describe('<DevLinkFooter />', () => {
  it('show devLink', () => {
    const { container } = render(<DevLinkFooter devLink={devLink} />);

    expect(container).toHaveTextContent('좋아요');
    expect(container).toHaveTextContent('맨션');
    expect(container).toHaveTextContent('북마크');
  });
});
