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
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let k = n;
    while (k > 0) {
      k--;
      if (!isBadVersion(k)) return k + 1;
    }
    return k;
  };
};
