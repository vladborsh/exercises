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
  // Found max
  let max;
  let col; 
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if ( max === undefined || matrix[i][j] > max) {
        max = matrix[i][j];
        col = j;
      }
    }
  }
  // Sort main diag
  for (let i = 0; i < matrix.length; i++) {
    let min = (matrix[i][i] < matrix[i][matrix.length-i-1]) ? matrix[i][i] : matrix[i][matrix.length-i-1];
    matrix[i][col] = min;
  }
  return matrix;
}
