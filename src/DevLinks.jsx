import React from 'react';

import styled from '@emotion/styled';

import { ReactTinyLink } from 'react-tiny-link';

import { colors } from './styles/common/designSystem';

import DevLinkHeader from './DevLinkHeader';
import Reviews from './Reviews';
import Tags from './Tags';

import { isEmpty } from './common/utils';

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
});

const DevLink = styled.div({
  flex: '3',
  margin: '10px',
  padding: '5px 8px',
  borderRadius: '5px',
  backgroundColor: colors.white,
  textAlign: 'center',
  boxShadow: `0px 4px 16px 0px ${colors.shadow}`,
  ': hover': {
    boxShadow: `0px 8px 32px 2px ${colors.shadow}`,
    borderRadius: '4px',
    transition: 'box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s',
  },
});

const DevLinkBody = styled.div({
  fontFamily: 'Nanum Pen Script, cursive',
});

const LinkWrapper = styled.div({
  backgroundColor: colors.transparent,
  '& a': {
    // Link 카드 전체
    outlineStyle: 'none',
    height: '100px',
    width: '28em',
    margin: '0',
    padding: '0',
    '& div': {
      // Link 타이틀, URL, 도메인이름 등의 Wrapper
      margin: '2px',
      padding: '0',
    },
    '& header': {
      // Link 타이틀
      margin: '0',
      padding: '0',
    },
    '& div div': {
      // Link URL
      margin: '0',
      padding: '0',
    },
    '& footer': {
      // URL 도메인이름
      margin: '0',
      padding: '0',
    },
  },
});

export default function DevLinks({ devLinks }) {
  if (isEmpty(devLinks || [])) {
    return <p>로딩중....</p>;
  }

  return (
    <Wrapper>
      {devLinks.map((devLink) => (
        <DevLink key={devLink.id}>
          <DevLinkHeader devLink={devLink} />
          <DevLinkBody>
            <LinkWrapper>
              <ReactTinyLink
                cardSize="medium"
                showGraphic
                width="100vh"
                maxLine={1}
                minLine={1}
                url={devLink.url}
              />
            </LinkWrapper>
            <Tags tags={devLink.tags} />
            <Reviews reviews={devLink.reviews} />
          </DevLinkBody>
        </DevLink>
      ))}
    </Wrapper>
  );
}
