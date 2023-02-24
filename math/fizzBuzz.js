// Fizz Buzz

/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
  const divWord = {
    3: "Fizz",
    5: "Buzz",
  };
  const output = [];
  for (let i = 1; i <= n; i++) {
    let temp = "";
    for (let div in divWord) {
      if (i % div === 0) temp += divWord[div];
    }
    if (temp === "") temp = `${i}`;
    output.push(temp);
  }
  return output;
};

const n = 3;
const actualOutput = fizzBuzz(n);
const expectOutput = ["1", "2", "Fizz"];
console.log(actualOutput);
