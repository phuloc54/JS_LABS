// Write a function to classify student
// Receive marks as a number, output as below:
// mark > 8         --> "Excellence"
// 7 <= mark < 8    --> "Good"
// 4 <= mark <= 6   --> "Not Good"
//  mark <= 4       --> "Bad"

// Version temporary variable
function classifyStudent(mark) {
  let classify;

  if (mark > 8) {
    classify = 'Excellence';
  } else if (mark >= 7) {
    classify = 'Good';
  } else if (mark >= 4 && mark <= 6) {
    classify = 'Not Good';
  } else {
    classify = 'Bad';
  }

  return classify;
}

// Version not use temporary variable
function classifyStudent(mark) {
  if (mark > 8) {
    return 'Excellence';
  }
  if (mark >= 7) {
    return 'Good';
  }
  if (mark >= 4 && mark <= 6) {
    return 'Not Good';
  }
  return 'Bad';
}

// Version not use else if and not use temporary var
function classifyStudent(mark) {
  if (mark > 8) return "Excellence";
  if (7 <= mark) return 'Good';
  if (4 <= mark) return 'Not Good';
  return 'Bad';
}

console.log(classifyStudent(10));