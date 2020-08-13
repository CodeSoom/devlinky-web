import React from 'react';

import styled from '@emotion/styled';

const NotFoundPageWrapper = styled.div({
  height: '100vh',
  padding: '0px 50px',
  display: 'flex',
  flexDirection: 'column',
  '& span': {
    marginTop: '50px',
    textAlign: 'center',
    fontSize: '40px',

  },
});

export default function NotFoundPage() {
  return (
    <NotFoundPageWrapper>
      <span>404 Not Found &#x1F602;</span>
    </NotFoundPageWrapper>
  );
}
