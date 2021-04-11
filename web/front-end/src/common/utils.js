export const get = (key) => (obj) => obj[key];

export const isEmpty = (arr) => arr.length === 0;

export const getMapToArray = (arr, key) => {
  const map = new Map();

  arr.forEach((element) => {
    map.set(element[key], element);
  });

  return map;
};

export const getUniqArray = (arr) => [...new Set(arr)];

export const getPropertysFromObjects = (arr, property) => arr.map((element) => element[property]);

export const joinObj1sAndObj2s = (arr1, arr1Key, arr2, arr2Key, newProperyName) => {
  const newArr2 = getMapToArray(arr2, arr2Key);

  return arr1.map((item) => ({
    ...item,
    [newProperyName]: newArr2.get(item[arr1Key]),
  }));
};
