'use strict';

const searchByKMP = require('./');
const getPrefixArray = require('./').getPrefixArray;

const longPattern = `
70a5ea909d65dc0285738b9e2889970e6db5cb6a8e988ba55b7f2e1b839b3d48
5bba87165231f6c7309c170f10eda7d0a4d8c5c1a4ca4c26bb35e4dc2d1b414e
efd2511da8d46d7b482b20af6535d88a22110d1e500d6647ae9742dd0105d7c6
a21569ebed9021d47c628773a63561cd880eaa2ab339926070ea02fce486a94d
ced2310a74283c261373d172500945ede9bda745d9c193e33ca8606af0bf7713
`;

const longText = `${longPattern}there-is-no-spoon${longPattern}`;

test('search', () => {
  expect(searchByKMP(longText, longPattern)).toMatchSnapshot();
});

test('prefix array', () => {
  expect(getPrefixArray(longPattern)).toMatchSnapshot();
});
