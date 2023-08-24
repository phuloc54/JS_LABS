const student = {
  name: 'Easy Fontend',
  age: 18,
};

const {age, name} = student;
console.log(age);
console.log(name);

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

function calcAvgMark(mark) {
  if (isEmptyObject(mark) || !mark) return -1;

  const length =  Object.keys(mark).length;

  let sumOfMarks = 0;
  for (const key in mark) {
    sumOfMarks += mark[key];
  }

  return Number((sumOfMarks / length).toFixed(1));
}

console.log(calcAvgMark({ math: 10, english: 8 }));
console.log(calcAvgMark({}));
console.log(calcAvgMark({ math: 10, english: 8, history: 10 }) + 2);

