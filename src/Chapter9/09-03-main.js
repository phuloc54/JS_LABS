// Rest: List --> Array --> Remain
const [first, second, third, ...remain] = [1, 2, 3, 4, 5, 6];
console.log(first);
console.log(second);
console.log(third);
console.log(remain);

// Spread Array --> List --> Clone new array
const arr1 = [1, 2, 3, 4];
const arr2 = [...arr1, 5, 6, 7, 8];

arr1.forEach((x, i) => console.log(x, i));
