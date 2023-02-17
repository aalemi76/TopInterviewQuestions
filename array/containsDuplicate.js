// Contains Duplicate

const containsDuplicate = function (nums) {
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
