import React from 'react';

import { render } from '@testing-library/react';

import Tags from './Tags';

import { devLink } from '../fixture/data';

describe('<Tags />', () => {
  it('renders without crash', () => {
    const { container } = render(<Tags subjects={devLink.subjects} />);

    devLink.subjects.forEach(({ name }, index) => {
      if (index < 3) {
        expect(container).toHaveTextContent(name);
      }

      if (index === 4) {
        expect(container).toHaveTextContent('...');
      }

      return null;
    });
  });
});
