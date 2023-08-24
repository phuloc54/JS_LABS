numberList.splice(2, 1, 2, 4);

numberList.pop();
numberList.pop();
console.log(numberList);

numberList.splice(2, 0, 9);
console.log(numberList);

const numberList = [2, 4, 6, 8];

console.log(numberList.some((x) => x % 2 === 0));
