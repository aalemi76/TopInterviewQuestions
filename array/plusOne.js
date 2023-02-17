// Plus One

const plusOne = function (digits) {
  return increment(digits, digits.length - 1);
};

const increment = function (digits, index) {
  let lastDigit = digits[index];
  if (lastDigit < 9) {
    digits[index] = lastDigit + 1;
    return digits;
  } else {
    digits[index] = 0;
    if (index - 1 >= 0) {
      return increment(digits, index - 1);
    } else {
      digits.unshift(1);
      return digits;
    }
  }
};

// const digits = [1, 2, 3];
// const digits = [4, 3, 2, 1];
const digits = [9, 9];
const newDigits = plusOne(digits);
console.log(newDigits);
