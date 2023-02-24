//  House Robber
/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  const robs = [nums[0]];
  robs[1] = Math.max(robs[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    robs[i] = Math.max(robs[i - 2] + nums[i], robs[i - 1]);
  }
  return robs[robs.length - 1];
};

const nums = [1, 2, 3, 1];
const expectedOutput = 4;
// const nums = [2, 7, 9, 3, 1];
// const expectedOutput = 12;
// const nums = [2, 1, 1, 2];
// const expectedOutput = 4;
const actualOutput = rob(nums);
const msg = `actual output is ${actualOutput} whereas expected output is ${expectedOutput}`;
console.assert(actualOutput === expectedOutput, msg);
