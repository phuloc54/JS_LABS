function filter(arr, filterFn) {
  if (!Array.isArray(arr) || typeof filterFn !== 'function') return undefined;

  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (filterFn(arr[i], i)) {
      newArr.push(arr[i]);
    }
  }

  if (Array.isArray(newArr)) return newArr;
}

console.log(
  filter(
    [2, 1, 5, 8, 10, 12],
    (x, i) => (x % 2 === 0 && i % 2 === 1) || (x % 2 === 1 && i % 2 === 0),
  ),
);
