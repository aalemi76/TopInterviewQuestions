// Reverse String

const reverseString = function (s) {
  const n = s.length - 1;
  for (let i = 0; i < Math.ceil(n / 2); i++) {
    let temp = s[n - i];
    s[n - i] = s[i];
    s[i] = temp;
  }
};

// const inputString = ["h", "e", "l", "l", "o"];
// const inputString = ["H", "a", "n", "n", "a", "h"];
const inputString = [
  "A",
  " ",
  "m",
  "a",
  "n",
  ",",
  " ",
  "a",
  " ",
  "p",
  "l",
  "a",
  "n",
  ",",
  " ",
  "a",
  " ",
  "c",
  "a",
  "n",
  "a",
  "l",
  ":",
  " ",
  "P",
  "a",
  "n",
  "a",
  "m",
  "a",
];
reverseString(inputString);
console.log(inputString);
