import React from 'react';

import { ReactTinyLink } from 'react-tiny-link';

import {
  Container,
  DevLink,
  DevLinkBody,
  LinkContainer,
} from './styles/DevLinks';

import DevLinkHeader from './DevLinkHeader';
import Reviews from './Reviews';
import Tags from './Tags';

import { isEmpty } from './common/utils';

export default function DevLinks({ devLinks }) {
  if (isEmpty(devLinks || [])) {
    return <p>로딩중....</p>;
  }

  return (
    <Container>
      {devLinks.map((devLink) => (
        <DevLink key={devLink.id}>
          <DevLinkHeader
            devLink={devLink}
          />
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
            <Tags
              tags={devLink.tags}
            />
            <Reviews
              reviews={devLink.reviews}
            />
          </DevLinkBody>
        </DevLink>
      ))}
    </Container>
  );
}
