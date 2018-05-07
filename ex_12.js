(() => {
  console.log(britainFlag([
    [3, 1, 15, 3, 4],
    [9, 4, 5, 6, 7],
    [3, 14, 10, 45, 1],
    [14, 4, 9, 45, 1],
    [8, 34, 2, 3, 14 ]
  ]));
})()

function britainFlag(matrix) {
  let result = [];
  let midRowNum = Math.floor(matrix.length / 2)
  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let j = 0; j < matrix.length; j++) {
      row.push(0);
    }
    result.push(row);
    for (let j = 0; j < matrix.length && j < i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  console.log(matrix);
  for (let i = 0; i < matrix.length; i++) {
    result[i][i] = matrix[i][i];
    result[matrix.length-i-1][i] = matrix[matrix.length-i-1][i];
    result[midRowNum][i] = matrix[midRowNum][i];
    result[i][midRowNum] = matrix[i][midRowNum];
  }
  return result;
}
