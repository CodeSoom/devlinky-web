import React from 'react';

import { render } from '@testing-library/react';

import DevLinks from './DevLinks';

import { devLinks } from '../fixture/data';

describe('<DevLinks />', () => {
  context('with devlinks', () => {
    it('renders without crash', () => {
      const { container } = render(<DevLinks devLinks={devLinks} />);

      expect(container).toHaveTextContent(devLinks[0].keyword.name);

      devLinks[0].subjects.forEach(({ name }, index) => {
        if (index < 3) {
          expect(container).toHaveTextContent(name);
        }

        if (index === 4) {
          expect(container).toHaveTextContent('...');
        }

        return null;
      });

      devLinks[0].reviews.forEach(({ name }, index) => {
        expect(container).toHaveTextContent(name);

        if (index < 4) {
          expect(container).toHaveTextContent(name);
        }

        if (index === 5) {
          expect(container).toHaveTextContent('...');
        }

        return null;
      });
    });
  });

  context('without devlinks', () => {
    it('show loading..', () => {
      const { container } = render(<DevLinks devLinks={null} />);

      expect(container).toHaveTextContent('로딩중....');
    });
  });
});
