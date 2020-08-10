import React from 'react';

import { render } from '@testing-library/react';

import Tags from './Tags';

import { devLink } from '../fixture/data';

describe('<Tags />', () => {
  it('renders without crash', () => {
    const { container } = render(<Tags tags={devLink.tags} />);

    devLink.tags.forEach((tag) => expect(container).toHaveTextContent(tag.name));
  });
});
