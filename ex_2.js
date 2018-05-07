(() => {
  getAvgMaxAndMin([
    [3, 4, 15],
    [9, 4, 5],
    [3, 14, 25],
  ]);
})()

function getAvgMaxAndMin(matrix) {
  let max = 0;
  let min = undefined;
  for (let i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix.length && j < i; j++) {
      if (matrix[i][j] < min || min === undefined) {
        min = matrix[i][j];
      }
      if (matrix[i][j] > max) {
        max = matrix[i][j];
      }
    }
  }
  return (max + min) / 2;
}
