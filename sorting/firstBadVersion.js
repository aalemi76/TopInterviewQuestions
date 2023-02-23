// First Bad Version

/**
 * Definition for isBadVersion()
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 */
const isBadVersion = function (version) {
  /// something...
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
`var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let low = 0;
    let high = n;
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (!isBadVersion(mid)) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return low;
  };
};`;
