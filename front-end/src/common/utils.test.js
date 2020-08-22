import { get, isEmpty } from './utils';

test('get', () => {
  const state = {
    name: 'react',
  };

  const getName = get('name');
  const getAge = get('age');

  expect(getName(state)).toBe('react');
  expect(getAge(state)).toBeUndefined();
});

test('isEmpty', () => {
  const array = [];

  expect(isEmpty(array)).toBeTruthy();
});
