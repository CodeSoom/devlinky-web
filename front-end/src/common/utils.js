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
