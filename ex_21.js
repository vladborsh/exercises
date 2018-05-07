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
  // Find max
  let max;
  let min;
  for (let i = 0; i < matrix.length; i++) {
    if (max === undefined || matrix[i][i] > matrix[max.i][max.j]) {
      max = {i,j};
    }
  }
  // Find min
  for (let i = 0; i < matrix.length; i++) {
    if (min === undefined || matrix[i][n] < matrix[min.i][n]) {
      min = {i,j:n};
    }
  }
  // Swap
  let temp = matrix[max.i][max.j];
  matrix[max.i][max.j] = matrix[min.i][n];
  matrix[min.i][n] = temp;
  return matrix;
}
