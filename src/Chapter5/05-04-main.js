// Logical operators
// Nếu là số dương thì
// Nếu là số dương chẵn thì
// Nếu là số dương chẵn lớn hớn 10 thì
//  Nếu là số dương chẵn chia hết cho năm và lớn hơn 10 thì
//  Nếu là số dương chẵn hoặc số âm lẽ thì


if (number > 0) {
  console.log('Positive number');
}

if (number > 0 && number % 2 === 0) {
  console.log('Positive and Even number');
}

if (number > 10 && number % 2 === 0) {
  console.log('Great 10 and Even number');
}
const number = 8;
if (number > 10 && number % 2 === 0 && number % 5 === 0) {
  console.log('Great 10 Even and Modifier 5');
}

if ((number > 0 && number % 2 === 0) || (number < 0 && number % 2 !== 0)) {
  console.log('Positive and Even Number of Negative and Odd Number');
}

console.log(Number(true))