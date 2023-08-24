// Create a function truncate(text, maxlength) that checks the length of the text and, if if exceeds max length - replace the end of str with the ellipsis character `"..."` to make its length equal to max length

// Not Good
function truncate(text, maxLength) {
  if (text.length > maxLength) {
    return text.replace(text[maxLength - 1], '\u2026').slice(0, maxLength);
  }
  return text;
}

function truncate2(text, maxLength) {
  if (text.length > maxLength) {
    const shortStr = text.slice(0, maxLength - 1);
    return `${shortStr}\u2026`;
  }
  return text;
}
console.log(truncate('Easy Frontend', 4));
console.log(truncate('Easy', 4));

