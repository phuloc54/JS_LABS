// every
function checkIfAllEven(arr) {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      return false;
    }
  }

  return true;
}

console.log(checkIfAllEven([1, 2, 3, 4]));
console.log(checkIfAllEven([4, 2, 6, 4]));

// some
function checkIfSomeEven(arr) {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return true;
    }
  }

  return false;
}

console.log(checkIfSomeEven([1, 3, 4, 5]));
console.log(checkIfSomeEven([1, 3, 3, 5]));

// indexOF
function indexOf(arr, e) {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === e) return i;
  }
  return -1;
}

// lastIndexOf
function lastIndexOf(arr, e) {
  if (!Array.isArray(arr)) return -1;

  let idxResult = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === e) {
      idxResult = i;
    }
  }
  return idxResult;
}

function lastIndexOf2(arr, e) {
  if (!Array.isArray(arr)) return -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === e) {
      return i;
    }
  }
  return -1;
}

const arrTemp = [1, 2, 3, 4, 2, 5];
console.log(lastIndexOf2(arrTemp, 2));
