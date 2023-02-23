// Convert Sorted Array to Binary Search Tree

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums) {
  return convertToBST(nums, 0, nums.length - 1);
};

const convertToBST = function (array, low, high) {
  if (low > high) return null;
  const mid = Math.floor((low + high) / 2);
  const leftRoot = convertToBST(array, low, mid - 1);
  const rightRoot = convertToBST(array, mid + 1, high);
  const root = new TreeNode(array[mid], leftRoot, rightRoot);
  return root;
};

const nums = [-10, -3, 0, 5, 9];
console.log(sortedArrayToBST(nums));
