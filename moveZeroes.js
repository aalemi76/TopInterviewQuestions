// Move Zeroes

const moveZeroes = function (nums) {
  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (number !== 0) {
      nums[i] = 0;
      nums[nonZeroIndex] = number;
      nonZeroIndex += 1;
    }
  }
};

// const nums = [0, 1, 0, 3, 12];

const nums = [1];

moveZeroes(nums);

console.log(nums);
