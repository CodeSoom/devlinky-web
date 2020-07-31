import styled from '@emotion/styled';

import React from 'react';

import { ReactTinyLink } from 'react-tiny-link';

import {
  mainColor, sub1Color, sub2Color, transparentColor, whiteColor,
} from './styles/colors';

import { devLinks } from '../fixture/data'; // TODO : 실제 DB에서 받아온 데이터로 변경할 예정

const HomePageContainer = styled.div({
  height: '100vh',
  padding: '0px 50px',
  display: 'flex',
  flexDirection: 'column',
});

const DevLinks = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
});

const DevLink = styled.div({
  flex: '3',
  margin: '10px',
  padding: '5px 8px',
  borderRadius: '5px',
  backgroundColor: whiteColor,
  textAlign: 'center',
  boxShadow: '0px 4px 16px 0px #dcdcdc',
  ': hover': {
    boxShadow: '0px 8px 32px 2px #dcdcdc',
    borderRadius: '4px',
    transition: 'box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s',
  },
});

const DevLinkHeader = styled.div(({ objectColor }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '0px 2px',
  '& .objects': {
    flex: '1.5',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '& .object': {
      color: objectColor,
      fontWeight: 'bold',
      alignItems: 'center',
      backgroundColor: '#fff',
      '& img': {
        width: '15px',
        marginRight: '1px',
        display: 'inline-block',
        verticalAlign: 'center',
        backgroundColor: 'inherit',
      },
      '& span': {
        letterSpacing: '1px',
        color: objectColor,
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily: 'Comfortaa',
        backgroundColor: 'inherit',
      },
    },
  },
  '& .writtenAt': {
    flex: '0.5',
    letterSpacing: '1px',
    color: mainColor,
    fontSize: '25px',
    fontWeight: 'bolder',
  },
}));

const DevLinkBody = styled.div({
  '& .subjects': {
    display: 'flex',
    flexDirection: 'row',
    '& button': {
      margin: '4px 2px',
      padding: '2px 10px',
      borderRadius: '5px',
      border: `1px solid ${sub1Color}`,
      color: sub1Color,
      fontSize: '16px',
      fontFamily: 'Nanum Pen Script, cursive',
      letterSpacing: '2px',
      backgroundColor: '#fff',
      ': hover': {
        backgroundColor: sub1Color,
        color: '#fff',
      },
      ': focus': {
        outlineStyle: 'none',
        backgroundColor: sub1Color,
        color: '#fff',
      },
    },
  },
  '& .linkContainer': {
    backgroundColor: transparentColor,
    '& a': { // Link 카드 전체
      outlineStyle: 'none',
      height: '100px',
      margin: '0',
      padding: '0',
      '& div': { // Link 타이틀, URL, 도메인이름 등의 Container
        margin: '2px',
        padding: '0',
      },
      '& header': { // Link 타이틀
        height: '100px',
        margin: '0',
        padding: '0',
      },
      '& div div': { // Link URL
        height: '100px',
        margin: '0',
        padding: '0',
      },
      '& footer': { // URL 도메인이름
        height: '100px',
        margin: '0',
        padding: '0',
      },
    },
  },
  '& .reviews': {
    display: 'flex',
    flexDirection: 'row',
    '& button': {
      margin: '2px',
      height: '50px',
      width: '50px',
      borderRadius: '50%',
      border: `1.5px solid ${sub2Color}`,
      color: sub2Color,
      backgroundColor: '#FFF',
      fontFamily: 'Nanum Pen Script, cursive',
      fontSize: '14px',
      letterSpacing: '3px',
      ': hover': {
        color: '#FFF',
        backgroundColor: sub2Color,
      },
      ': focus': {
        outlineStyle: 'none',
        backgroundColor: sub2Color,
        borderRadius: '50%',
        color: '#fff',
      },
    },
  },
});

export default function HomePage() {
  return (
    <HomePageContainer>
      <DevLinks>
        {devLinks.map((devLink) => (
          <DevLink key={devLink.id}>
            <DevLinkHeader objectColor={devLink.object.color}>
              <div className="objects">
                <div className="object">
                  <img src={devLink.object.img} alt="" />
                  <span>{devLink.object.name}</span>
                </div>
              </div>
              <span className="writtenAt">{devLink.writtenAt}</span>
            </DevLinkHeader>
            <DevLinkBody>
              <div className="linkContainer">
                <ReactTinyLink
                  cardSize="medium"
                  showGraphic
                  width="100vh"
                  maxLine={1}
                  minLine={1}
                  url={devLink.url}
                />
              </div>
              <div className="subjects">
                {devLink.subjects.map((subject) => (
                  <button type="button" key={subject.id}>
                    #
                    {subject.name}
                  </button>
                ))}
              </div>
              <div className="reviews">
                {devLink.reviews.map((review) => (
                  <button type="button" key={review.id}>{review.name}</button>
                ))}
              </div>
            </DevLinkBody>
          </DevLink>
        ))}
      </DevLinks>
    </HomePageContainer>
  );
}
