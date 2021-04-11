import React from 'react';

import { render } from '@testing-library/react';

import UserInfo from './UserInfo';

import { user } from '../../../../fixture/data';

test('UserInfo ', () => {
  const { container, getByAltText } = render(<UserInfo userInfo={user} />);

  expect(getByAltText(`${user.githubId}`)).toHaveAttribute('src', user.githubProfile);
  expect(container).toHaveTextContent(user.githubId);
});
