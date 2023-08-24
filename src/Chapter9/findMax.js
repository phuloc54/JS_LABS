// Write a function to find max
// for...i
// for each
// reduce

// 1. For ... i
function findMax(arr) {
  if (!Array.isArray(arr)) return undefined;

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  return max;
}

// For each
function findMax2(arr) {
  if (!Array.isArray(arr)) return undefined;

  let max = Number.NEGATIVE_INFINITY;
  arr.forEach((number) => {
    if (number > max) max = number;
  });

  return max;
}

// Reduce
function findMax3(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;

  // 1. Arrow Inline
  // return arr.reduce((max, number) => {
  //   if (number > max) return number;
  //   return max;
  // });

  // 2. Arrow Function Shorthand
  // return arr.reduce((max, number) => (number > max ? number : max));

  // 3. Arrow Function
  return arr.reduce((max, number) => {
    return number > max ? number : max;
  });
}

console.log(findMax([1, 2, 5, 6, 13, 2]));
console.log(findMax2([1, 2, 5, 6, 13, 1]));
console.log(findMax3([1, 2, 5, 6, 13, 0]));
