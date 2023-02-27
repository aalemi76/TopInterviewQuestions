// Valid Parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const match = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack = [];
  for (let char of s) {
    for (let matchChar in match) {
      if (char === matchChar) {
        stack.push(char);
        break;
      } else if (char === match[matchChar]) {
        const lastChar = stack.pop();
        if (lastChar !== matchChar) return false;
        break;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid(""));
