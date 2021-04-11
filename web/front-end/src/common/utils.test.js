import {
  get, isEmpty, getMapToArray, getUniqArray, getPropertysFromObjects, joinObj1sAndObj2s,
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

test('joinObj1sAndObj2s', () => {
  const array1 = [{
    userUid: 'uid1',
    title: '11',
  }, {
    userUid: 'uid2',
    title: '12',
  }, {
    userUid: 'uid3',
    title: '13',
  }];

  const array2 = [{
    uid: 'uid1',
    address: '경기도',
    phone: '010',
  }, {
    uid: 'uid2',
    address: '경기도2',
    phone: '020',
  }, {
    uid: 'uid3',
    address: '경기도3',
    phone: '030',
  }];

  const array3 = [{
    userUid: 'uid1',
    title: '11',
    user: {
      uid: 'uid1',
      address: '경기도',
      phone: '010',
    },
  }, {
    userUid: 'uid2',
    title: '12',
    user: {
      uid: 'uid2',
      address: '경기도2',
      phone: '020',
    },
  }, {
    userUid: 'uid3',
    title: '13',
    user: {
      uid: 'uid3',
      address: '경기도3',
      phone: '030',
    },
  }];

  const result = joinObj1sAndObj2s(array1, 'userUid', array2, 'uid', 'user');

  expect(result).toStrictEqual(array3);
});
