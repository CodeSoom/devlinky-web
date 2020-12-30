import { get, isEmpty, getMapToArray } from './utils';

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

test('getMapToArray', () => {
  const obj = {
    uid: 'uid1',
    age: '12',
  };

  const key = obj.uid;

  const array = [obj];

  expect(getMapToArray(array, 'uid').get(key)).toBe(obj);
});
