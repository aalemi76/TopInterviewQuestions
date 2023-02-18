// Valid Palindrome

const isPalindrome = function (inputString) {
  let str = inputString
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("");
  const n = str.length - 1;
  for (let i = 0; i <= n; i++) {
    if (str[i] !== str[n - i]) return false;
  }
  return true;
};

// const s = "A man, a plan, a canal: Panama";
// const s = "race a car";
// const s = " ";
const s = "0P";

console.log(isPalindrome(s));
