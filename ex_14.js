(() => {
  console.log(doStuff([
    [3, 1, 15, 3, 4],
    [9, 4, 5, 6, 7],
    [3, 14, 10, 45, 1],
    [14, 4, 9, 45, 1],
    [8, 34, 2, 3, 14]
  ], 2));
})()

function doStuff(matrix) {
  for (let i = 0; i < matrix.length / 2; i++) {
    for (let j = i + 1; j < matrix.length - i - 1; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[matrix.length - i - 1][j];
      matrix[matrix.length - i - 1][j] = temp;
      temp = matrix[j][i];
      matrix[j][i] = matrix[j][matrix.length - i - 1];
      matrix[j][matrix.length - i - 1] = temp;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][i] = 0;
    matrix[i][matrix.length - 1 - i] = 0;
  }
  return matrix;
}
