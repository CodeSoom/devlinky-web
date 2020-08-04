import styled from '@emotion/styled';

import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ReactTinyLink } from 'react-tiny-link';

import { colors, textStyles } from './styles/designSystem';

import { loadInitialData } from './common/slice';

import { get } from './common/utils';

const { title, subTitle, note } = textStyles;

const HomePageContainer = styled.div({
  height: '100vh',
  padding: '0px 50px',
  display: 'flex',
  flexDirection: 'column',
});

const DevLinks = styled.div({
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

const DevLinkHeader = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '0px 2px',
});

const Keywords = styled.div({
  flex: '1.5',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const Keyword = styled.div(({ objectColor }) => ({
  color: objectColor,
  alignItems: 'center',
  backgroundColor: colors.white,
  '& img': {
    width: '15px',
    marginRight: '1px',
    display: 'inline-block',
    verticalAlign: 'center',
    backgroundColor: 'inherit',
  },
  '& span': {
    color: objectColor,
    fontFamily: title.fontFamily,
    fontSize: title.fontSize,
    fontWeight: title.fontWeight,
    letterSpacing: title.letterSpacing,
    backgroundColor: 'inherit',
  },
}));

const WrittenAt = styled.span({
  flex: '0.5',
  color: colors.blue.dark,
  fontSize: '25px',
  fontWeight: 'bolder',
  letterSpacing: '1px',
});

const DevLinkBody = styled.div({
  fontFamily: 'Nanum Pen Script, cursive',
});

const Tags = styled.div({
  display: 'flex',
  flexDirection: 'row',
  '& button': {
    margin: '4px 2px',
    borderRadius: '5px',
    border: `1px solid ${colors.orange}`,
    padding: '2px 10px',
    color: subTitle.color,
    fontFamily: subTitle.fontFamily,
    fontSize: subTitle.fontSize,
    letterSpacing: subTitle.letterSpacing,
    backgroundColor: colors.white,
    ': hover': {
      backgroundColor: colors.orange,
      color: colors.white,
    },
    ': focus': {
      outlineStyle: 'none',
      backgroundColor: colors.orange,
      color: colors.white,
    },
  },
});

const LinkContainer = styled.div({
  backgroundColor: colors.transparent,
  '& a': {
    // Link 카드 전체
    outlineStyle: 'none',
    height: '100px',
    margin: '0',
    padding: '0',
    '& div': {
      // Link 타이틀, URL, 도메인이름 등의 Container
      margin: '2px',
      padding: '0',
    },
    '& header': {
      // Link 타이틀
      height: '100px',
      margin: '0',
      padding: '0',
    },
    '& div div': {
      // Link URL
      height: '100px',
      margin: '0',
      padding: '0',
    },
    '& footer': {
      // URL 도메인이름
      height: '100px',
      margin: '0',
      padding: '0',
    },
  },
});

const Reviews = styled.span({
  display: 'flex',
  flexDirection: 'row',
  '& button': {
    margin: '2px',
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    border: `1.5px solid ${colors.blue.sky}`,
    backgroundColor: colors.white,
    color: note.color,
    fontFamily: note.fontFamily,
    fontSize: note.fontSize,
    letterSpacing: note.letterSpacing,
    ': hover': {
      backgroundColor: colors.blue.sky,
      color: colors.white,
    },
    ': focus': {
      outlineStyle: 'none',
      borderRadius: '50%',
      backgroundColor: colors.blue.sky,
      color: colors.white,
    },
  },
});

export default function HomePage() {
  const dispatch = useDispatch();

  const devLinks = useSelector(get('devlinks'));

  useEffect(() => {
    dispatch(loadInitialData());
  }, []);

  if (!devLinks) {
    return (
      <HomePageContainer>
        <DevLinks />
        <p>로딩중....</p>
      </HomePageContainer>
    );
  }

  return (
    <HomePageContainer>
      <DevLinks>
        {devLinks.map((devLink) => (
          <DevLink key={devLink.id}>
            <DevLinkHeader>
              <Keywords>
                <Keyword objectColor={devLink.keyword.color}>
                  <img src={devLink.keyword.img} alt="" />
                  <span>{devLink.keyword.name}</span>
                </Keyword>
              </Keywords>
              <WrittenAt>{devLink.writtenAt}</WrittenAt>
            </DevLinkHeader>
            <DevLinkBody>
              <LinkContainer>
                <ReactTinyLink
                  cardSize="medium"
                  showGraphic
                  width="100vh"
                  maxLine={1}
                  minLine={1}
                  url={devLink.url}
                />
              </LinkContainer>
              <Tags>
                {devLink.subjects.map((subjectItem, index) => {
                  if (index < 3) {
                    return (
                      <button type="button" key={subjectItem.id}>
                        #
                        {subjectItem.name}
                      </button>
                    );
                  }
                  if (index === 4) {
                    return (
                      <button type="button" key={subjectItem.id}>
                        ...
                      </button>
                    );
                  }
                  return null;
                })}
              </Tags>
              <Reviews>
                {devLink.reviews.map((reviewItem, index) => {
                  if (index < 4) {
                    return (
                      <button type="button" key={reviewItem.id}>
                        #
                        {reviewItem.name}
                      </button>
                    );
                  }
                  if (index === 5) {
                    return (
                      <button type="button" key={reviewItem.id}>
                        ...
                      </button>
                    );
                  }
                  return null;
                })}
              </Reviews>
            </DevLinkBody>
          </DevLink>
        ))}
      </DevLinks>
    </HomePageContainer>
  );
}
