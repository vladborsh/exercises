(() => {
  console.log(swap([
    [3, 1, 15],
    [9, 4, 5],
    [3, 14, 10],
  ]));
})()

function findSumOfBigger(matrix) {
  let maxOnDiag = undefined;
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    if( matrix[i][i] > maxOnDiag || maxOnDiag === undefined ) {
      maxOnDiag = matrix[i][i]
    }
  }
  console.log(maxOnDiag);
  for (let i = 0; i < matrix.length; i ++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] > maxOnDiag) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

function swap(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let temp = matrix[i][i];
    matrix[i][i] = matrix[i][matrix[0].length-i-1];
    matrix[i][matrix[0].length-i-1] = temp;
  }
  return matrix;
}
