// Count Primes

/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
  let seen = new Uint8Array(n);
  let count = 0;
  for (i = 2; i < n; i++) {
    if (seen[i]) continue;
    count++;
    for (let j = i * i; j < n; j += i) seen[j] = 1;
  }
  return count;
};

console.log(countPrimes(1000000000));
