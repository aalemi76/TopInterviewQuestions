// Hamming Distance

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  const distance = x ^ y;
  return hammingWeight(distance);
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
  if (n <= 1) return n;
  return (n % 2) + hammingWeight(Math.floor(n / 2));
};

const x = 3;
const y = 1;

console.log(hammingDistance(x, y));
