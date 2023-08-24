// find() method
// find(x => x > 0)
function findFirstEven(arr) {
  if (!Array.isArray) return undefined;

  let firstEven = undefined;
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if (number % 2 === 0) {
      firstEven = arr[i];
      break;
    }
  }

  return firstEven;
}

console.log(findFirstEven([1, 8, 3, 4, 5]));

// v2
function findFirstEven(arr) {
  if (!Array.isArray(arr)) return undefined;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return arr[i];
    }
  }

  return undefined;
}

// v3
function findFirstEven2(arr, callbackFn) {
  if (!Array.isArray(arr)) return undefined;

  for (let i = 0; i < arr.length; i++) {
    if (callbackFn(arr[i], i)) {
      return arr[i];
    }
  }

  return undefined;
}

function isEven(number) {
  return number % 2 === 0;
}

console.log(findFirstEven2(arr, isEven));

// v4
function findFirstEven2(arr, callbackFn) {
  if (!Array.isArray(arr)) return undefined;

  for (let i = 0; i < arr.length; i++) {
    if (callbackFn(arr[i], i)) {
      return arr[i];
    }
  }

  return undefined;
}

console.log(
  findFirstEven2(arr, function (number) {
    return number % 2 === 0;
  }),
);

// v5
function findFirstEven2(arr, callbackFn) {
  if (!Array.isArray(arr)) return undefined;

  for (let i = 0; i < arr.length; i++) {
    if (callbackFn(arr[i], i)) {
      return arr[i];
    }
  }

  return undefined;
}

console.log(
  findFirstEven2(arr, (number) => {
    return number % 2 === 0;
  }),
);

// v6
function findFirstEven2(arr, callbackFn) {
  if (!Array.isArray(arr)) return undefined;

  for (let i = 0; i < arr.length; i++) {
    if (callbackFn(arr[i], i)) {
      return arr[i];
    }
  }

  return undefined;
}

const arr = [1, 3, 5, 2, 1];
console.log(
  findFirstEven2(arr, (number) => number % 2 === 0),
);
