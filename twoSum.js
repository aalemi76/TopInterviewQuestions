// Two Sum

const twoSum = function (nums, target) {
  const hashMap = {};
  for (let [index, number] of nums.entries()) {
    const complement = target - number;
    if (hashMap[complement] !== undefined) {
      return [hashMap[complement], index];
    } else {
      hashMap[number] = index;
    }
  }
};

// const nums = [2, 7, 11, 15];
// const target = 9;

// const nums = [3, 2, 4];
// const target = 6;

const nums = [3, 3];
const target = 6;

const indice = twoSum(nums, target);

console.log(indice);
