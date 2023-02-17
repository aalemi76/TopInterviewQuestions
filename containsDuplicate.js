// Contains Duplicate

var containsDuplicate = function (nums) {
  const dict = {};

  for (let number of nums) {
    if (dict[number] != undefined) {
      return true;
    } else {
      dict[number] = 1;
    }
  }
  return false;
};

const dict = {};
dict[1] = 1;
console.log(dict[1]);
