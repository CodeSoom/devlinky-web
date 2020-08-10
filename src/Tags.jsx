import React from 'react';

import { TagsContainer } from './styles/DevLinks';

export default function Tags({ subjects }) {
  return (
    <TagsContainer>
      {subjects.map((subjectItem) => (
        <button type="button" key={subjectItem.id}>
          #
          {subjectItem.name}
        </button>
      ))}
    </TagsContainer>
  );
}
