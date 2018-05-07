(() => {
  console.log(doStuff([
    [3, 1, 15, 3, 4],
    [9, 4, 5, 6, 7],
    [3, 14, 12, 45, 1],
    [14, 4, 9, 45, 1],
    [8, 34, 2, 3, 14]
  ], 2));
})()

function doStuff(matrix) {
  let sum = 0;
  let avg = 0;
  let mark = false;
  let centralEl = matrix[Math.floor(matrix.length / 2)][Math.floor(matrix.length / 2)]
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      sum += matrix[i][j]
    }
  }
  avg = sum / (matrix.length * matrix.length);
  console.log(avg);
  if (centralEl < avg) {
    mark = true;
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length - 1; j++) {
      for (let k = 0; k < matrix[0].length - j - 1; k++) {
        if ((mark && matrix[i][k] > matrix[i][k + 1])
          || (!mark && matrix[i][k] < matrix[i][k + 1])
        ) {
          let temp = matrix[i][k];
          matrix[i][k] = matrix[i][k + 1];
          matrix[i][k + 1] = temp;
        }
      }
    }
  }
  return matrix;
}
