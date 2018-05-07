(() => {
  getAvgMaxAndMin([
    [3, 1, 15],
    [9, 4, 5],
    [3, 14, 25],
  ]);
})()

function getAvgMaxAndMin(matrix) {
  let max = 0;
  let maxElRow = 0;
  let min = undefined;
  let minElCol = 0;
  let result = 0;
  // Search
  for (let i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix.length; j++) {
      if (matrix[i][j] < min || min === undefined) {
        min = matrix[i][j];
        minElCol = j;
      }
      if (matrix[i][j] > max) {
        max = matrix[i][j];
        maxElRow = i;
      }
    }
  }
  // Scalar
  for (let i = 0; i < matrix.length; i++) {
    result += matrix[i][minElCol] * matrix[maxElRow][i];
  }
  return result;
}
