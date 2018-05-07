(() => {
  console.log(orderEvenCols([
    [3, 14, 15],
    [9, 6, 5],
    [3, 4, 25],
  ]));
})()

function orderEvenCols(matrix) {
  for (let i = 1; i < matrix[0].length; i+=2) {
    for (let j = 0; j < matrix.length-1; j++) {
      for (let k = 0; k < matrix.length-j-1; k++) {
        if (matrix[k][i] > matrix[k+1][i]) {
          let temp = matrix[k][i];
          matrix[k][i] = matrix[k+1][i];
          matrix[k+1][i] = temp;
        }
      }
    }
  }
  return matrix;
}

function replaceFirstLastCols(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let temp = matrix[i][0];
    matrix[i][0] = matrix[i][matrix[0].length-1];
    matrix[i][matrix[0].length-1] = temp;
  }
  return matrix;
}
