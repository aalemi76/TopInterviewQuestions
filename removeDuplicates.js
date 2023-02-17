// Remove Duplicates from Sorted Array

const removeDuplicates = function (nums) {
  let insertIndex = 1;
  for (let i = 1; i < nums.length; i++) {
    // We skip to next index if we see a duplicate element
    if (nums[i - 1] != nums[i]) {
      /* Storing the unique element at insertIndex index and incrementing
               the insertIndex by 1 */
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }
  return insertIndex;
};

const errorMsg = "Something goes wrong!";
// let nums = [1, 1, 2]; // Input array
// const expectedNums = [1, 2]; // The expected answer with correct length

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]; // Input array
const expectedNums = [0, 1, 2, 3, 4]; // The expected answer with correct length

const k = removeDuplicates(nums); // Calls your implementation

console.assert(k === expectedNums.length, "%o", { k, nums, errorMsg });
for (let i = 0; i < k; i++) {
  console.assert(nums[i] === expectedNums[i]);
}
