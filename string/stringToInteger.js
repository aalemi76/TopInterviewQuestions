// String to Integer

/**
 * @param {string} s
 * @return {number}
 */

const myAtoi = function (s) {
  let sign = 1;
  let base = 0;
  let i = 0;
  const maxInt = Math.pow(2, 31) - 1;
  const minInt = Math.pow(-2, 31);
  while (s[i] === " ") i++;

  if (s[i] === "+" || s[i] === "-") {
    sign = 1 - 2 * (s[i++] == "-");
  }

  while (s[i] >= "0" && s[i] <= "9") {
    if (
      base > maxInt / 10 ||
      (base === Math.floor(maxInt / 10) && s[i] - "0" > 7)
    ) {
      if (sign === 1) return maxInt;
      return minInt;
    }
    base = base * 10 + (s[i++] - "0");
  }
  return base * sign;
};
// const s = "";
// const s = " ";
// const s = "42";
// const s = "   -42";
// const s = "4193 with words";
// const s = "words and 987";
// const s = "-5-";
const s = "2147483648";

console.log(myAtoi(s));
