import React from 'react';

import { TagsContainer } from './styles/DevLinks';

export default function Tags({ subjects }) {
  return (
    <TagsContainer>
      {subjects.map((subject) => (
        <button type="button" key={subject.id}>
          #
          {subject.name}
        </button>
      ))}
    </TagsContainer>
  );
}
