import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import DevLinksContainer from './DevLinksContainer';

import { devLinks } from '../fixture/data';

jest.mock('react-redux');

describe('<DevLinksContainer />', () => {
  context('with devlinks', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        devlinks: devLinks,
      }));
    });

    it('renders without crash', () => {
      const { container } = render(
        <DevLinksContainer />,
      );

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
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        devlinks: null,
      }));
    });

    it('show loading..', () => {
      const { container } = render(
        <DevLinksContainer />,
      );

      expect(container).toHaveTextContent('로딩중....');
    });
  });
});
