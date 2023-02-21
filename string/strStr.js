// strStr

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const strStr = function (haystack, needle) {
  if (haystack.toLowerCase().includes(needle.toLowerCase())) {
    return haystack.toLowerCase().indexOf(needle.toLowerCase());
  } else {
    return -1;
  }
};

// const haystack = "sadbutsad";
// const needle = "sad";

const haystack = "leetcode";
const needle = "leeto";

console.log(strStr(haystack, needle));
