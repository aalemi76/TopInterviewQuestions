// Number of 1 Bits

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
  if (n <= 1) return n;
  return (n % 2) + hammingWeight(Math.floor(n / 2));
};

console.log(hammingWeight(11));
