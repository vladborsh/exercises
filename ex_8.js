(() => {
  console.log(sortOrFindAvg([
    [3, 1, 15],
    [9, 4, 5],
    [3, 14, 10],
  ]));
})()

function sortOrFindAvg(matrix, n) {
  let avgResults = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % n == 0) {
      sortRow(matrix[i]);
    } else {
      avgResults.push(findAvgInRow(matrix[i]));
    }
  }
  return avgResults;
}

function sortRow(row) {
  for (let i = 0; i < row.length - 1; i++) {
    for (let j = 0; j < row.length - i - 1; i++) {
      if (row[j] < row[j + 1]) {
        let temp = row[j + 1];
        row[j + 1] = row[j];
        row[j] = temp;
      }
    }
  }
  return row;
}

function findAvgInRow(row) {
  let sum = 0;
  for (let i = 0; i < row.length; i++) {
    sum += row[i];
  }
  return sum / row.length;
}
