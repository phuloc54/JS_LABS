function findAndDeleteVowel(s) {
  if (s.length === 0) {
    return '';
  }

  let strResult = '';
  for (let i = 0; i < s.length; i++) {
    if (
      s[i].toLowerCase() === 'e' ||
      s[i].toLowerCase() === 'u' ||
      s[i].toLowerCase() === 'o' ||
      s[i].toLowerCase() === 'a' ||
      s[i].toLowerCase() === 'i'
    ) {
      strResult += '';
    } else {
      strResult += s[i];
    }
  }
  return strResult;
}

console.log(findAndDeleteVowel(''));
console.log(findAndDeleteVowel('eu oai vl'));
console.log(findAndDeleteVowel('Pham Phu LOc'));
console.log(findAndDeleteVowel('Anh GI OI Em'));
