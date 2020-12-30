import React from 'react';

import styled from '@emotion/styled';

import { colors } from './styles/common/designSystem';

import { isEmpty } from './common/utils';

const Wrapper = styled.div({
  padding: '10px 0px',
  borderTop: `${colors.gray.light} 1px solid`,
  borderBottom: `${colors.gray.light} 1px solid`,
});

const DevLinkDescription = styled.div({
  fontFamily: 'system-ui',
  textAlign: 'left',
  padding: '0px 10px',
  marginTop: '5px',
  borderLeft: `${colors.gray.dark} 2px solid`,
  '& p': {
    padding: '2px 0px',
  },
});

const Tag = styled.span({
  color: colors.blue.basic,
});

const Comment = styled.p({

});

const DevLinkCard = styled.div({
  fontFamily: 'system-ui',
  textAlign: 'left',
  marginTop: '10px',
  paddingBottom: '5px',
  justifyItems: 'center',
  boxShadow: `0 4px 8px 0 ${colors.shadow}`,
  height: '20rem',
  ':hover': {
    cursor: 'pointer',
  },
  '& img': {
    width: '100%',
    height: '80%',
  },
  '& p': {
    padding: '5px',
    fontSize: '20px',
  },
});

export default function DevLinkBody({ devLink }) {
  if (isEmpty(devLink || [])) {
    return <p>로딩중....</p>;
  }

  const handleClick = () => {
    window.open(devLink.url, '_blank');
  };

  return (
    <Wrapper>
      <DevLinkDescription>
        {devLink.tags.map((tag) => (
          <Tag href="#" key={tag}>
            #
            {tag}
          </Tag>
        ))}
        <Comment>{devLink.comment}</Comment>
      </DevLinkDescription>
      <DevLinkCard onClick={handleClick}>
        <img src={devLink.thumbnail} alt={`${devLink.title} 링크 썸네일`} />
        <p>{devLink.title}</p>
      </DevLinkCard>
    </Wrapper>
  );
}
