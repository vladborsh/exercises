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
  let min;
  for (let i = 0; i < matrix.length; i++) {
    if (min === undefined || matrix[i][i] < min) {
      min = matrix[i][i]
    }
  }
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] > min) {
        sum += matrix[i][j]
      }
    }
  }
  return sum;
}
