function printEvenNumbersLessThan(arr, n) {
  if (!Array.isArray(arr) && n < 2) return -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] < n) {
      console.log(arr[i]);
    }
  }
}

function printEvenNumbersLessThan(n) {
  if (n < 2) return -1;
  for (let i = 2; i < n; i += 2) {
    console.log(i);
  }
}

printEvenNumbersLessThan(12);
