// Symmetric Tree

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
//Iterative
// const isSymmetric = function (root) {
//   const stack = [];
//   stack.push(root.left);
//   stack.push(root.right);
//   while (stack.length !== 0) {
//     const right = stack.pop();
//     const left = stack.pop();
//     if (!right && !left) continue;
//     if (!right || !left || right.val !== left.val) return false;
//     stack.push(left.right);
//     stack.push(right.left);
//     stack.push(left.left);
//     stack.push(right.right);
//   }
//   return true;
// };

//Recursive
const isSymmetric = function (root) {
  return isMirror(root.left, root.right);
};
/**
 *
 * @param {TreeNode} left
 * @param {TreeNode} right
 * @returns {boolean}
 */
const isMirror = function (left, right) {
  if (!right && !left) return true;
  if (!right || !left || right.val !== left.val) return false;
  return isMirror(left.left, right.right) && isMirror(left.right, right.left);
};
