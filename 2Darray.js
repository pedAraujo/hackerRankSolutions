function hourglassSum(arr) {
  let sum = 0;
  for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
      let Mij =
        arr[i - 1][j - 1] +
        arr[i - 1][j - 0] +
        arr[i - 1][j + 1] +
        arr[i][j] +
        arr[i + 1][j - 1] +
        arr[i + 1][j + 0] +
        arr[i + 1][j + 1];
      if (Mij > sum) {
        sum = Mij;
      }
    }
  }
  return sum;
}

arr = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

sum = hourglassSum(arr);
console.log(sum);
