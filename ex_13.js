(() => {
  console.log(sorting([
    [3, 1, 15, 3, 4],
    [9, 4, 5, 6, 7],
    [3, 14, 10, 45, 1],
    [14, 4, 9, 45, 1],
    [8, 34, 2, 3, 14]
  ],2));
})()

function sorting(matrix, b) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length-1; j++) {
      for (let k = 0; k < matrix[0].length-j-1; k++) {
        let doSwap;
        if ( (i%2 == 0 && matrix[i][k] < matrix[i][k+1])
          || (i%2 != 0 && matrix[i][k] > matrix[i][k+1])) {
          doSwap = true;
        }
        if (doSwap) {
          let temp = matrix[i][k];
          matrix[i][k] = matrix[i][k+1];
          matrix[i][k+1] = temp;
        }
      }
    }
    for (let j = 0; j < matrix[0].length; j++) {
      if ( matrix[i][j] < b) {
        matrix[i][j] *= b;
      }
    }
  }
  return matrix;
}
