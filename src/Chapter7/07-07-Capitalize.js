// Write a function to capitalize first letter

function capitalizeFirstLetter(s) {
  if (s === '') return '';

  const firstLetter = s[0].toUpperCase();
  const remainLetters = s.slice(1).toLowerCase();

  return `${firstLetter}${remainLetters}`
}

console.log(capitalizeFirstLetter("pham PHU lOC"));