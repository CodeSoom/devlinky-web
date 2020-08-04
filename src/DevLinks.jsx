import React from 'react';

import { ReactTinyLink } from 'react-tiny-link';

import {
  Container,
  DevLink,
  DevLinkHeader,
  Keywords,
  Keyword,
  WrittenAt,
  DevLinkBody,
  Tags,
  LinkContainer,
  Reviews,
} from './styles/DevLinks';

export default function DevLinks({ devLinks }) {
  if (!devLinks) {
    return <p>로딩중....</p>;
  }

  return (
    <Container>
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
    </Container>
  );
}
