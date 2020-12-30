import {
  get, isEmpty, getMapToArray, getUniqArray, getPropertysFromObjects,
} from './utils';

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

test('getUniqArray', () => {
  const array = [1, 2, 3, 4, 4, 4, 4, 2, 2, 2];

  expect(getUniqArray(array)).toStrictEqual([1, 2, 3, 4]);
});

test('getPropertysFromObjects', () => {
  const array = [{
    uid: 'uid1',
    age: '11',
  }, {
    uid: 'uid2',
    age: '12',
  }, {
    uid: 'uid3',
    age: '13',
  }];

  expect(getPropertysFromObjects(array, 'uid')).toStrictEqual(['uid1', 'uid2', 'uid3']);
});
