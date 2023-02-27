// Missing Number

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  let seen = new Array(nums.length + 1).fill(0);
  for (let num of nums) seen[num] = 1;
  return seen.indexOf(0);
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
