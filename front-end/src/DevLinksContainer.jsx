import React from 'react';

import { useSelector } from 'react-redux';

import { get, isEmpty } from './common/utils';

import DevLinks from './DevLinks';

import { devLinks } from '../../fixture/data';

export default function DevLinksContainer() {
  if (isEmpty(devLinks || [])) {
    return <p>로딩중....</p>;
  }

  return (
    <DevLinks devLinks={devLinks} />
  );
}
