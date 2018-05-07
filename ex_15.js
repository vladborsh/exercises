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
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (j % 2 == 0 || i % 2 != 0) {
        matrix[i][j] = 0;
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    if ( i % 2 != 0 ) {
      continue;
    }
    for (let j = 0; j < matrix[0].length - 1; j++) {
      for (let k = 1; k < matrix[0].length - j - 2; k+=2) {
        if (matrix[i][k] > matrix[i][k+2]) {
          let temp = matrix[i][k];
          matrix[i][k] = matrix[i][k+2];
          matrix[i][k+2] = temp;
        }
      }
    }
  }
  return matrix;
}
