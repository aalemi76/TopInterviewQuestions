// Climbing Stairs

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 3) return n;
  const steps = [0, 1, 2, 3];
  for (let i = 4; i <= n; i++) {
    steps.push(steps[i - 1] + steps[i - 2]);
  }
  return steps.pop();
};
