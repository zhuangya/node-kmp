"use strict";

const getPrefixArray = pattern => {
  const patternLength = pattern.length;
  const result = Array(patternLength);

  result[0] = 0;

  let i = 1; // 既然 prefix array 第一个一定是 0
  let j = 0;

  while (i < patternLength) {
    if (pattern[i] === pattern[j]) {
      result[i] = result[i - 1] + 1;
      j = j + 1;
    } else {
      result[i] = 0;
      j = 0;
    }
    i = i + 1;
  }

  return result;
};

const searchByKMP = (string, pattern) => {
  const prefix = getPrefixArray(pattern);
  const stringLength = string.length;
  const patternLength = pattern.length;
  const result = [];

  let i = 0;
  let j = 0;

  while (i < stringLength) {
    if (string[i] === pattern[j]) {
      i = i + 1;
      j = j + 1;
    }

    if (j === patternLength) {
      result.push(i - j);
      j = prefix[j - 1];
    } else if (i < stringLength && pattern[j] !== string[i]) {
      if (j !== 0) {
        j = prefix[j - 1];
      } else {
        i = i + 1;
      }
    }
  }

  return result;
};

module.exports = searchByKMP;
module.exports.getPrefixArray = getPrefixArray;
