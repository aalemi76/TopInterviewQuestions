// Pascal's Triangle

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  const result = [[]];
  for (let i = 1; i <= numRows; i++) {
    const prevRow = result[i - 1];
    const currRow = [];
    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) {
        currRow.push(1);
      } else {
        currRow.push(prevRow[j - 1] + prevRow[j]);
      }
    }
    result.push(currRow);
  }
  result.splice(0, 1);
  return result;
};

console.log(generate(1));
