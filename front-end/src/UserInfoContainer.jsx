import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './common/utils';

import UserInfo from './UserInfo';

export default function UserInfoContainer() {
  const devLinkerInfo = useSelector(get('devLinkerInfo'));

  if (!devLinkerInfo) {
    return <p>로딩중....</p>;
  }

  return (
    <UserInfo userInfo={devLinkerInfo} />
  );
}
