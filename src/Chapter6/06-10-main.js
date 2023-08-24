// Convert hours to seconds
function convertHoursToSeconds(hours) {
  if (hours <= 0) return -1;

  const SECOND_PER_HOUR = 3600;
  return hours * SECOND_PER_HOUR;
}

console.log(convertHoursToSeconds(0));

function findMaxIn3Numbers(a, b, c) {
  let result = a;
  if (b > result)
    result = b;
  if (c > result)
    result = c;
  return result;
}

console.log(findMaxIn3Numbers(3123, 10, 52));

// Given 3 numbers, find max even number
function findMaxEvenNumber (a, b, c) {
    
  let result = Number.NEGATIVE_INFINITY;
  if (a % 2 === 0)
    result = a;
  if (b % 2 === 0 && b > result)
    result = b;
  if (c % 2 === 0 && c > result)
    result = c;
  return result;
}

console.log(findMaxEvenNumber(0, 0, 0));
console.log(findMaxEvenNumber(1, 3, 5));
console.log(findMaxEvenNumber(1, 4, 5));
console.log(findMaxEvenNumber(7, 5, 6));
console.log(findMaxEvenNumber(10, 1, 2));