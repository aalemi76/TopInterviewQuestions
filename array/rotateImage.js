// Rotate Image

const rotate = function (matrix) {
  let leftBound = 0;
  let rightBound = matrix.length - 1;
  while (leftBound < rightBound) {
    for (let i = 0; i < rightBound - leftBound; i++) {
      let top = leftBound;
      let bottom = rightBound;
      const topRight = matrix[top + i][rightBound];
      matrix[top + i][rightBound] = matrix[top][leftBound + i];
      matrix[top][leftBound + i] = matrix[bottom - i][leftBound];
      matrix[bottom - i][leftBound] = matrix[bottom][rightBound - i];
      matrix[bottom][rightBound - i] = topRight;
    }
    leftBound++;
    rightBound--;
  }
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate(matrix);
console.log(matrix);
