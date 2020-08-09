import React from 'react';

import { useSelector } from 'react-redux';

import get from './common/utils';

import DevLinks from './DevLinks';

export default function DevLinksContainer() {
  const devLinks = useSelector(get('devlinks'));

  // TODO: Move to utils.
  const isEmpty = (arr) => arr.length === 0;
  if (isEmpty(devLinks || [])) {
    return <p>로딩중....</p>;
  }

  return (
    <DevLinks devLinks={devLinks} />
  );
}
