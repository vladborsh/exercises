(() => {
  console.log(collateralDiagonalMax([
    [3, 1, 15],
    [9, 4, 5],
    [3, 14, 25],
  ]));
})()

function getAvgOnCols(matrix) {
  let avgResults = [];
  for (let i = 0; i < matrix.length; i++) {
    let sum = 0;
    for (j = 0; j < matrix.length; j++) {
      sum += matrix[j][i];
    }
    avgResults.push( sum / matrix.length );
  }
  return avgResults;
}

function collateralDiagonalMax(matrix) {
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][matrix.length-1-i] > max) {
      max = matrix[i][matrix.length-1-i];
    }
  }
  return max;
}
