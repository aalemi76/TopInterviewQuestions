// Validate Binary Search Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function (root) {
  return isBST(root);
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} lower
 * @param {TreeNode} upper
 * @return {boolean}
 */
const isBST = function (root, lower, upper) {
  if (!root) return true;
  if ((lower && root.val <= lower.val) || (upper && root.val >= upper.val))
    return false;
  return isBST(root.left, lower, root) && isBST(root.right, root, upper);
};
