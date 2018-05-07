(() => {
  getMaxElementsSumCol([
    [3, 4, 15, 6],
    [9, 4, 5, 6],
    [3, 14, 5, 7],
  ]);
})()

function getSpecialElementsNumber(matrix) {
  let num = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    let sum = 0;
    for (let j = 0; j < matrix.length; j++) {
      sum += matrix[j][i];
    }
    for (let j = 0; j < matrix.length; j++) {
      let diff = sum - matrix[j][i];
      if (diff < matrix[j][i]) {
        num++;
      }
    }
  }
  console.log(num);
  return num;
}

function getMaxElementsSumCol(matrix) {
  let colWithMaxSum = 0;
  let max = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    let sum = 0;
    for (let j = 0; j < matrix.length; j++) {
      sum += matrix[j][i];
    }
    if (sum > max) {
      max = sum;
      colWithMaxSum = i;
    }
  }
  console.log(max, i);
  return i;
}