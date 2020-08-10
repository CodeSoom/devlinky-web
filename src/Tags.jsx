import React from 'react';

import { TagsContainer } from './styles/DevLinks';

export default function Tags({ tags }) {
  return (
    <TagsContainer>
      {tags.map((tag) => (
        <button type="button" key={tag.id}>
          #
          {tag.name}
        </button>
      ))}
    </TagsContainer>
  );
}
