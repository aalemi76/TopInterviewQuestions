// Shuffle an array

/**
 * @param {number[]} nums
 */
const Solution = function (nums) {
  this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const result = [...this.nums];
  const len = this.nums.length;
  for (let i = 0; i < len; i++) {
    const rndIndex = Math.floor(Math.random() * len);
    const temp = result[rndIndex];
    result[rndIndex] = result[i];
    result[i] = temp;
  }
  return result;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
const nums = [1, 2, 3];
const obj = new Solution(nums);
const param_1 = obj.reset();
const param_2 = obj.shuffle();

console.log(param_1);
console.log(param_2);
