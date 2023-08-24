function classifyStudent(mark) {
  let result = '';
  switch (mark) {
    case 10:
    case 9:
      result = 'Excellence';
      break;
    case 8:
    case 7:
      result = 'Good';
      break;
    case 6:
    case 5:
    case 4:
      result = 'Not Good';
      break;
    case 3:
    case 2:
    case 1:
      result = 'Bad';
    default:
      result = 'Invalid mark';
  }
  return result;
}

console.log(classifyStudent(2.3));
