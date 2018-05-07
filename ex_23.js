(() => {
  console.log(doStuff([
    [3, 12, 15, 3, 4],
    [9, 4, 5, 6, 7],
    [3, 14, 12, 45, 1],
    [14, 4, 9, 45, 1],
    [8, 34, 2, 3, 14]
  ], 2));
})()

function doStuff(matrix, n) {
  let max;
  let min;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      if (max === undefined || matrix[i][j] > max) {
        max = matrix[i][j]
      }
      if (min === undefined || matrix[i][j] < min) {
        min = matrix[i][j]
      }
    }
  }
  return ((max + min) / 2);
}
