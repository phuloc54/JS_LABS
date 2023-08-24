// Check if a string contains an email address with `@gmail.com` or not

function hasEmail(email) {
  if (email === '') return false;

  // return email.includes('@gmail.com');
  // return email.endsWith('@gmail.com');
  return email.indexOf('@gmail.com') >= 0;
}

console.log(hasEmail('abc@gmail.com'));
console.log(hasEmail(''));
console.log(hasEmail('asdf'));
