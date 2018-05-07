(() => {
  console.log(orderColumns([
    [3, 1, 15],
    [9, 4, 5],
    [3, 14, 10],
  ]));
})()

function orderColumns(matrix, a) {
  let num = 0;
  let minSum;
  let colWithMinElSums;
  for (let i = 0; i < matrix[0].length; i++) {
    if (i < a) {
      for (let j = 0; j < matrix.length-1; j++) {
        for (let k = 0; k < matrix.length-j-1; k++) {
          if (matrix[k][i] < matrix[k+1][i]) {
            var temp = matrix[k][i];
            matrix[k][i] = matrix[k+1][i];
            matrix[k+1][i] = matrix[k][i];
          }
        }
      }
    }
    let sum = 0;
    for (let j = 0; j < matrix.length; j++) {
      sum += matrix[j][i];
    }
    console.log(sum)
    if (minSum === undefined || sum < minSum) {
      minSum = sum;
      colWithMinElSums = i;
    }
  }
  return colWithMinElSums;
}
