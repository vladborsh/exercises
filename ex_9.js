(() => {
  console.log(findElements([
    [3, 1, 15],
    [9, 4, 5],
    [3, 14, 10],
  ]));
})()

function findElements(matrix, k1, k2) {
  let num = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] > i + j) {
        num++;
      }
    }
  }
  for(let i = 0; i < matrix[0].length; i++) {
    let temp = matrix[k1][i];
    matrix[k1][i] = matrix[k2][i];
    matrix[k2][i] = temp;
  }
  return num;
}
