(() => {
  console.log(doStuff([
    [3, 12, 15, 3, 4],
    [9, 4, 5, 6, 7],
    [3, 14, 12, 45, 1],
    [14, 4, 9, 45, 1],
    [8, 34, 2, 3, 14]
  ], 2));
})()

function doStuff(matrix) {
  for (let j = 0; j < matrix.length * matrix.length - 1; j++) {
    for (let k = 0; k < matrix.length * matrix.length - j - 1; k++) {
      let row = Math.floor(k / matrix.length);
      let col = k - (row * matrix.length);
      let row_1 = Math.floor((k+1) / matrix.length);
      let col_1 = k + 1 - (row * matrix.length);
      console.log((k+1), row_1, col_1)
      if (matrix[row][col] > matrix[row_1][col_1]) {
        let temp = matrix[row][col];
        matrix[row][col] = matrix[row_1][col_1];
        matrix[row_1][col_1] = temp;
      }
    }
  }
  return matrix;
}
