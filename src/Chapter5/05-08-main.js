// Write a function to check positive even number

// Version 1
function isPositiveEven(n) {
  let isValid;

  if (n % 2 === 0 && n > 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
}

// Version 2
function isPositiveEven(n) {
  let isValid = false;

  if (n % 2 === 0 && n > 0) {
    isValid = true;
  }

  return isValid;
}

// Version 3
function isPositiveEven(n) {
  if (n % 2 === 0 && n > 0) {
    return true;
  }
  return false;
}

// Version 4
function isPositiveEven(n) {
  return n % 2 === 0 && n > 0;
}

// Version Bonus
function isPositiveEven(n) {
  return n % 2 === 0 && n > 0 ? 'Right' : 'Wrong';
}

console.log(isPositiveEven(5));
