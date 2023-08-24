// function getErrorMessage(errorCode) {
//   let errorName;

//   switch (errorCode) {
//     case 'E01':
//       errorName = 'Invalid username or password';
//       break;
//     case 'E02':
//       errorName = 'Too many attempts';
//       break;
//     case 'E03':
//       errorName = 'Missing data';
//       break;
//     default:
//       errorName = 'Something went wrong';
//   }

//   return errorName;
// }

// v2
function getErrorMessage(errorCode) {
  const errorMap = {
    E01: 'Invalid username or password',
    E02: 'Too many attempts',
    E03: 'Missing data',
  };

  return errorMap[errorCode] || 'Something went wrong';
}

console.log(getErrorMessage('E03'));
console.log(getErrorMessage('E01'));
console.log(getErrorMessage('E09'));
console.log(getErrorMessage('E02'));

console.log(Boolean(0));


console.log((0.2).toFixed(20));
console.log((0.1).toFixed(20));
console.log((0.2 + 0.1).toFixed(20));
console.log((0.3).toFixed(20));


console.log((1).toFixed(20));
console.log((2).toFixed(20));

console.log((0.2 + 0.1) == 0.3);
console.log((0.2 + 0.1) === 0.3);

console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);
console.log((0.1 + 0.2).toFixed(1) === 0.3.toFixed(1)) ;

console.log(0.1.toFixed(1));
console.log(0.2.toFixed(1));