// Maximum Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let maxSub = nums[0];
  let cSum = 0;
  for (let num of nums) {
    if (cSum < 0) cSum = 0;
    cSum += num;
    maxSub = Math.max(maxSub, cSum);
  }
  return maxSub;
};
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const expectedOutput = 6;
const actualOutput = maxSubArray(nums);
const msg = `actual output is ${actualOutput} whereas expected output is ${expectedOutput}`;
console.assert(actualOutput === expectedOutput, msg);
