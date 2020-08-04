import React from 'react';

import { useSelector } from 'react-redux';

import get from './common/utils';

import DevLinks from './DevLinks';

export default function DevLinksContainer() {
  const devLinks = useSelector(get('devlinks'));

  return (
    <div>
      <DevLinks devLinks={devLinks} />
    </div>
  );
}
