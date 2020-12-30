import React from 'react';

import DevLinks from './DevLinks';

import { devLinks } from '../../fixture/data';

export default function DevLinksContainer() {
  return (
    <DevLinks devLinks={devLinks} />
  );
}
