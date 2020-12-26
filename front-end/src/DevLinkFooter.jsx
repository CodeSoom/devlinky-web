import React from 'react';

import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp, faAt, faBookmark,
} from '@fortawesome/free-solid-svg-icons';

import { colors } from './styles/common/designSystem';

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-around',
  fontFamily: 'system-ui',
  alignContent: 'center',
  width: 'auto',
  textAlign: 'center',
  padding: '8px 12px',
  '& div': {
    flex: '1',
    margin: '0px 2px',
    borderRadius: '10px',
    padding: '8px',
    '& span': {
      marginLeft: '5px',
    },
  },
  '& div:hover': {
    background: '#F5F1ED',
  },
});

const Like = styled.div({
  ':hover': {
    '& span': {
      color: colors.blue.sky,
    },
    '& svg path': {
      color: colors.blue.sky,
    },
  },
});

const Mention = styled.div({
  ':hover': {
    '& span': {
      color: colors.green,
    },
    '& svg path': {
      color: colors.green,
    },
  },
});

const Bookmark = styled.div({
  ':hover': {
    '& span': {
      color: colors.orange,
    },
    '& svg path': {
      color: colors.orange,
    },
  },
});

export default function DevLinkFooter() {
  return (
    <Wrapper>
      <Like>
        <FontAwesomeIcon icon={faThumbsUp} />
        <span>좋아요</span>
      </Like>
      <Mention>
        <FontAwesomeIcon icon={faAt} />
        <span>맨션</span>
      </Mention>
      <Bookmark>
        <FontAwesomeIcon icon={faBookmark} />
        <span>북마크</span>
      </Bookmark>
    </Wrapper>
  );
}
