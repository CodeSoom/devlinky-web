import React from 'react';

import { render } from '@testing-library/react';

import Tags from './Tags';

import { devLink } from '../../fixture/data';

describe('<Tags />', () => {
  it('show Tags', () => {
    const { tags } = devLink;

    const { container } = render(<Tags tags={tags} />);

    tags.forEach((tag) => expect(container).toHaveTextContent(tag.name));
  });
});
