// Function to check odd or even number
function checkOddOrEvenNumber(n) {
  if (n === 0 || n - n.toFixed(0) > 0)
    return "Number is not odd or even";
  
  if (n % 2 === 0) return "Number is Even Number";
  return "Number is Odd Number";
}

function checkOddOrEvenNumber(n) {
  if (n === 0 || n - n.toFixed(0) > 0)
    return "Number is not odd or even";
  
  return n % 2 == 0 ? "Even" : "Odd";
}

console.log(checkOddOrEvenNumber(10));
console.log(checkOddOrEvenNumber(-2));
console.log(checkOddOrEvenNumber(1.23));
console.log(checkOddOrEvenNumber(5));

function isDivisibleBy5(n) {
  if (n === 0 || n - n.toFixed(0) > 0)  return false;
  return n % 5 === 0;
}

console.log(isDivisibleBy5(10));
console.log(isDivisibleBy5(5));
console.log(isDivisibleBy5(-5));
console.log(isDivisibleBy5(0));
console.log(isDivisibleBy5(1.23));

function isPerfectSquareNumber(n) {
  if (n <= 0 || n - n.toFixed(0) > 0) return false;
  return Math.trunc(Math.sqrt(n)) ** 2 === n;
}

console.log(isPerfectSquareNumber(100));
console.log(isPerfectSquareNumber(-64));
console.log(isPerfectSquareNumber(0));
console.log(isPerfectSquareNumber(3.52));

console.log(Math.sqrt(3));