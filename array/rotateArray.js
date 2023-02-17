// Rotate Array

const rotate = function (nums, k) {
  k = k % nums.length;
  replace(nums, 0, nums.length - 1);
  replace(nums, 0, k - 1);
  replace(nums, k, nums.length - 1);
};

const replace = function (nums, l, r) {
  while (l < r) {
    const a = nums[l];
    nums[l] = nums[r];
    nums[r] = a;
    l++;
    r--;
  }
};
// let nums = [1, 2, 3, 4, 5, 6, 7];
let nums = [1, 2];
rotate(nums, 3);
console.log(nums);
