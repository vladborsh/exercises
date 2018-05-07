(() => {
  console.log(swap([
    [3, 1, 15],
    [9, 4, 5],
    [3, 14, 10],
  ]));
})()

function findMinimumOnDiagAndSwap(matrix, n) {
  let maxOnColN;
  let rowNumForMaxOnColN;
  let minOnDiag;
  let colNumForMinOnDiag;
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][i] < minOnDiag || minOnDiag === undefined) {
      minOnDiag = matrix[i][i];
      colNumForMinOnDiag = i;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][n] > maxOnColN || maxOnColN === undefined) {
      maxOnColN = matrix[i][n];
      rowNumForMaxOnColN = i;
    }
  }
  // swap
  var temp = matrix[colNumForMinOnDiag][colNumForMinOnDiag];
  matrix[colNumForMinOnDiag][colNumForMinOnDiag] = matrix[rowNumForMaxOnColN][n];
  matrix[rowNumForMaxOnColN][n] = temp;
  return matrix;
}
