import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('<App />', () => {
  const { container } = render(<App />);

  expect(container).toHaveTextContent(/#Dev/i);
  expect(container).toHaveTextContent(/로 그 인/i);
});
