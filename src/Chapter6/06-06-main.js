//  Random number in range [0, n]
// v2
function randomNumber(n) {
  // Validate arguments
  if (n <= 0) return NaN;

  // Processing and Return 
  return Math.round((Math.random() * n));
}

console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));

// Random number in range [a, b]

// v1
function randomNumberInRange(a, b) {
  if (a >= b) return NaN;

  let result = Math.round(Math.random() * b);
  if (result < a)
    result += a;

  return result;
}

// v2
function randomNumberInRange(a, b) {
  if (a >= b) return -1;
  
  const random = Math.random() * (b - a);

  return Math.round(random) + a;
}

console.log(randomNumberInRange(2, 4));
console.log(randomNumberInRange(2, 4));
console.log(randomNumberInRange(2, 4));
console.log(randomNumberInRange(2, 4));
console.log(randomNumberInRange(2, 4));
console.log(randomNumberInRange(2, 4));
console.log(randomNumberInRange(2, 4));
console.log(randomNumberInRange(2, 4));
console.log(randomNumberInRange(2, 4));
console.log(randomNumberInRange(2, 4));
console.log(randomNumberInRange(2, 4));
console.log(randomNumberInRange(2, 4));