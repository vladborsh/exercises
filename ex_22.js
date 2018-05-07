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
  // Sort
  for (let i = 0; i < matrix[0].length; i++) {
    if (i%n == 0) {
      for (let j = 0; j < matrix.length-1; j++) {
        for (let k = 0; k < matrix.length-j-1; k++) {
          if (matrix[k][i] > matrix[k+1][i]) {
            let temp = matrix[k][i];
            matrix[k][i] = matrix[k+1][i];
            matrix[k+1][i] = temp;
          }
        }
      }
    } else {
      let sum = 0;
      for (let j = 0; j < matrix.length; j++) {
        sum += matrix[j][i];
      }
      let avg = sum / matrix.length;
      console.log(avg);
    }
  }
  return matrix;
}
