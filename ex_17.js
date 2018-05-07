(() => {
  console.log(doStuff([
    [3, 12, 15, 3, 4],
    [9, 4, 5, 6, 7],
    [3, 14, 12, 45, 1],
    [14, 4, 9, 45, 1],
    [8, 34, 2, 3, 14]
  ], 2));
})()

function doStuff(matrix) {
  let coordinates = [];
  const checkCoordinates = (i,j) => {
    for (let s = 0; s < coordinates.length; s++) {
      if (coordinates[s].i == i && coordinates[s].j == j) return true;
    }
    return false;
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if ((i + j)%2 == 0) {
        matrix[i][j] = 0;
        coordinates.push({i,j});
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length - 1; j++) {
      let m = 1;
      for (let k = 0; k < matrix[0].length - j - 1; k++) {
        for ( ; checkCoordinates(i, k+m) && ((k + m) < matrix[0].length); m++ ) true
        if (matrix[i][k] > matrix[i][k + m]) {
          let temp = matrix[i][k];
          matrix[i][k] = matrix[i][k + m];
          matrix[i][k + m] = temp;
          m = 1;
        }
      }
    }
  }
  return matrix;
}
