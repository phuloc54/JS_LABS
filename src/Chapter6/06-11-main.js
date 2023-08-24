function extractOnesOfNumber(n) {
  // if (100 <= n && n <= 999)
  if (n.toString().length === 3)
    return Math.trunc(n) % 10;
  return -1;
}

function extractTensOfNumber(n) {
  // if (100 <= n && n <= 999)
  if (n.toString().length === 3)
    return Math.trunc((n / 10)) % 10;
  return -1;
}

function extractHundredOfNumber(n) {
  // if (100 <= n && n <= 999)
  if (n.toString().length === 3)
    return Math.trunc(n / 100);
  return -1;
}

function sumOfAllDigits(n) {
  if (n.toString().length !== 3)
    return -1;
  const ones = Math.trunc(n % 10);
  const tens = Math.trunc(n / 10) % 10;
  const hundreds = Math.trunc(n / 100);
  return ones + tens + hundreds;
}

console.log(sumOfAllDigits("23"));
console.log(extractOnesOfNumber(987));
console.log(extractTensOfNumber(987));
console.log(extractHundredOfNumber(987));


function isSymmetryNumber(n) {
  if (n.toString().length !== 3) return false;

  let symmetryNumber = 0;
  const hundreds = Math.trunc(n / 100);
  const tens = Math.trunc(n / 10) % 10;
  const ones = Math.trunc(n % 10);
  symmetryNumber = ones * 100 + tens * 10 + hundreds;

  return n === symmetryNumber;
}

console.log(isSymmetryNumber(121));
console.log(isSymmetryNumber(1221));
console.log(isSymmetryNumber(11));
console.log(isSymmetryNumber(123));

function findMaxDigit(n) {
  if (n <= 0) return -1;

  let max = n % 10;
  n = Math.trunc(n /10);
  
  while (n !== 0) {
    let ones = n % 10;
    if (ones > max)
      max = ones;
    n = Math.trunc(n /10)
  }
  return max;
}

console.log(findMaxDigit(1244));