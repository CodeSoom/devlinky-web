import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import UserInfoContainer from './UserInfoContainer';

import { user } from '../../../fixture/data';

jest.mock('react-redux');

describe('<UserInfoContainer />', () => {
  context('with devLinkerInfo', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        devLinkerInfo: user,
      }));
    });

    it('show devLinkerInfo', () => {
      const { container, getByAltText } = render(
        <UserInfoContainer />,
      );

      expect(getByAltText(`${user.githubId}`)).toHaveAttribute('src', user.githubProfile);
      expect(container).toHaveTextContent(user.githubId);
    });
  });

  context('without devLinkerInfo', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        devLinkerInfo: null,
      }));
    });

    it('show loading..', () => {
      const { container } = render(
        <UserInfoContainer />,
      );
      expect(container).toHaveTextContent('로딩중....');
    });
  });
});
