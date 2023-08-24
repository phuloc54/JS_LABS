function reduce(arr, callbackFn, initialValue) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') {
    throw new Error('Invalid parameters');
  }

  if (arr.length === 0) {
    if (initialValue === undefined) {
      throw new Error('Should have initialValue when array is empty');
    }
    return initialValue;
  }

  const hasInitialValue = initialValue !== undefined;
  const startIndex = hasInitialValue ? 0 : 1;
  let result = hasInitialValue ? initialValue : arr[0];

  for (let i = startIndex; i < arr.length; i++) {
    result = callbackFn(result, arr[i]);
  }

  return result;
}

function calcSum(prevSum, number) {
  return prevSum + number;
}

console.log('Using regular way');
// Regular
console.log(reduce([2, 4, 6], calcSum, 0));
console.log(reduce([2, 4, 6], calcSum, 1));

// Function inline - anonymous
console.log('Using Function inline - anonymous');
console.log(
  reduce([2, 4, 6], function (prevSum, number) {
    return prevSum + number;
  }),
);

// Arrow function
console.log('Using arrow function');
console.log(
  reduce([2, 4, 6], (prevSum, number) => {
    return prevSum + number;
  }),
);

// Arrow function short hand
console.log('Using arrow function short hand');
console.log(reduce([2, 4, 6], (prevSum, number) => prevSum + number));
console.log(reduce([2, 4, 6], (prevSum, number) => prevSum + number, 6));
console.log(reduce([2, 4, 6], (prevSum, number) => prevSum + number));
console.log(reduce([2, 4, 6], (prevSum, number) => prevSum + number, undefined));
console.log(reduce([], (prevSum, number) => prevSum + number, 10));

function reduce2(arr, callbackFn, initialValue) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') {
    throw new Error('Invalid Parameters');
  }

  if (arr.length !== 0) {
    const hasInitialValue = initialValue !== undefined;
    const startIndex = hasInitialValue ? 0 : 1;
    let result = hasInitialValue ? initialValue : arr[0];

    for (let i = startIndex; i < arr.length; i++) {
      result = callbackFn(result, arr[i]);
    }
    return result;
  }

  return initialValue !== undefined ? initialValue : NaN;
}

console.log('Using arrow function short hand');
console.log(reduce2([2, 4, 6], (prevSum, number) => prevSum + number));
console.log(reduce2([2, 4, 6], (prevSum, number) => prevSum + number, 6));
console.log(reduce2([2, 4, 6], (prevSum, number) => prevSum + number));
console.log(reduce2([2, 4, 6], (prevSum, number) => prevSum + number, undefined));
console.log(reduce2([], (prevSum, number) => prevSum + number, 10));
console.log(reduce2([], (prevSum, number) => prevSum + number));
