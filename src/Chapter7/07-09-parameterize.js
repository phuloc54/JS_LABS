// Write a JavaScript Function to parameterize a string
// eg: parameterize("Code JS Is Fun") --> 'code-js-is-fun'

function parameterize(str) {
  if (str === 0)  return '';
  
  // return str.replaceAll(' ', '-').toLowerCase();
  return str.toLowerCase().split(' ').join('-');
}

console.log(parameterize('Code JS Is Fun'));