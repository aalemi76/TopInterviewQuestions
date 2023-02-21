//  Longest Common Prefix

/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = function (strs) {
  if (strs === null || strs.length === 0) return "";
  return lcp(strs, 0, strs.length - 1);
};

const lcp = function (strs, low, high) {
  if (low === high) return strs[low];

  mid = Math.floor((low + high) / 2);
  const lcpLeft = lcp(strs, low, mid);
  const lcpRight = lcp(strs, mid + 1, high);
  const commonPrefix = findCommonPrefix(lcpLeft, lcpRight);
  return commonPrefix;
};

const findCommonPrefix = function (left, right) {
  min = Math.min(left.length, right.length);
  for (let i = 0; i < min; i++) {
    if (left[i] !== right[i]) {
      return left.substring(0, i);
    }
  }
  return left.substring(0, min);
};

// const strs = ["flower", "flow", "flight"];
const strs = ["dog", "racecar", "car"];

console.log(longestCommonPrefix(strs));
