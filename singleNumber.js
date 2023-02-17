// Single Number

const singleNumber = function (nums) {
  const dict = {};
  for (let number of nums) {
    if (dict[number] != undefined) {
      dict[number] += 1;
    } else {
      dict[number] = 1;
    }
  }
  for (key in dict) {
    if (dict[key] === 1) return key;
  }
};
