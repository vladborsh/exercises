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
  // Reflect 
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  // Sort main diag
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix.length - i - 1; j++) {
      if (matrix[j][j] > matrix[j+1][j+1]) {
        let temp = matrix[j][j];
        matrix[j][j] = matrix[j+1][j+1];
        matrix[j+1][j+1] = temp;
      }
    }
  }
  return matrix;
}
