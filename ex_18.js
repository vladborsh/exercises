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
  // Calculate avg
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      sum += matrix[i][j];
    }
  }
  let avg = sum / (matrix.length * matrix[0].length);
  // Accumulate coordinates of elements bigger than avg
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] > avg) {
        coordinates.push({i,j});        
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    // Order by asc
    for (let j = 0; j < matrix[0].length - 1; j++) {
      let m = 1;
      for (let k = 0; k < matrix[0].length - j - 1; k++) {
        for ( ; checkCoordinates(i, k) && k < matrix[0].length - j - 1; k++ ) true      
        for ( ; checkCoordinates(i, k+m) && ((k + m) < matrix[0].length); m++ ) true
        if (matrix[i][k] > matrix[i][k + m]) {
          let temp = matrix[i][k];
          matrix[i][k] = matrix[i][k + m];
          matrix[i][k + m] = temp;
          m = 1;
        }
      }
    }
    // Order by desc
    for (let j = 0; j < matrix[0].length - 1; j++) {
      let m = 1;
      for (let k = 0; k < matrix[0].length - j - 1; k++) {
        for ( ; !checkCoordinates(i, k) && k < matrix[0].length - j - 1; k++ ) true                
        for ( ; !checkCoordinates(i, k+m) && ((k + m) < matrix[0].length); m++ ) true
        if (matrix[i][k] < matrix[i][k + m]) {
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
