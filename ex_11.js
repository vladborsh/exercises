(() => {
  console.log(swapElements([
    [3, 1, 15],
    [9, 4, 5],
    [3, 14, 10],
  ]));
})()

function swapElements(matrix) {
  let min;
  let rowNum;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if ( min === undefined || matrix[i][j] < min) {
        min = matrix[i][j];
        rowNum = i;
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    matrix[rowNum][i] = matrix[i][i] * matrix[i][matrix.length-i-1];
  }
  return matrix;
}
