import React from 'react';

import { render } from '@testing-library/react';

import DevLink from './DevLink';

import { devLink } from '../../fixture/data';

describe('<DevLink />', () => {
  it('show devLink', () => {
    const { container, getByAltText } = render(<DevLink devLink={devLink} />);

    expect(getByAltText('프로필 사진')).toHaveAttribute('src', devLink.firstDevlinker.img);
    expect(container).toHaveTextContent(devLink.firstDevlinker.id);
    expect(container).toHaveTextContent(devLink.createdAt);

    devLink.tags.forEach((tag) => expect(container).toHaveTextContent(tag.name));
    expect(getByAltText('링크 썸네일')).toHaveAttribute('src', devLink.thumbnamil);
    expect(container).toHaveTextContent(devLink.title);

    expect(container).toHaveTextContent('좋아요');
    expect(container).toHaveTextContent('맨션');
    expect(container).toHaveTextContent('북마크');
  });
});
