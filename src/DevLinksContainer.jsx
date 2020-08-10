import React from 'react';

import { useSelector } from 'react-redux';

import { get, isEmpty } from './common/utils';

import DevLinks from './DevLinks';

export default function DevLinksContainer() {
  const devLinks = useSelector(get('devLinks'));

  if (isEmpty(devLinks || [])) {
    return <p>로딩중....</p>;
  }

  return (
    <DevLinks devLinks={devLinks} />
  );
}
