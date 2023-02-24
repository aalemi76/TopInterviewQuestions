// Roman to Integer

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const charDef = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let output = 0;
  for (let i = 0; i < s.length; i++) {
    if (charDef[s[i]] < charDef[s[i + 1]]) {
      output += charDef[`${s[i]}${s[i + 1]}`];
      i++;
      continue;
    } else {
      output += charDef[s[i]];
    }
  }
  return output;
};

// const s = "III";
// const expectOutput = 3;
// const s = "LVIII";
// const expectOutput = 58;
const s = "MCMXCIV";
const expectOutput = 1994;
const actualOutput = romanToInt(s);
const msg = `The actual output is ${actualOutput} whereas
the expected output is ${expectOutput}`;
console.assert(actualOutput === expectOutput, msg);
