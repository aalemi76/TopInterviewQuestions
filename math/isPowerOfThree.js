// Power of Three

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function (n) {
  if (n < 1) return false;
  if (n === 1) return true;
  return isPowerOfThree(n / 3);
};

console.log(isPowerOfThree(9));
