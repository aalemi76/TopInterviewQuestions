// Reverse Bits

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function (n) {
  let reverse = 0;
  let bit = 0;
  while (n > 0) {
    reverse = reverse * 2 + (n % 2);
    n = Math.floor(n / 2);
    bit++;
  }
  while (bit < 32) {
    reverse *= 2;
    bit += 1;
  }
  return reverse;
};

console.log(reverseBits(43261596));
