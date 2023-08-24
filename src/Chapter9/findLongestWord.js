function findLongestWordI(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) {
    throw new Error('Args is not array or array is empty');
  }

  let wordResult = wordList[0];
  for (let i = 1; i < wordList.length; i++) {
    if (wordList[i].length > wordResult.length) {
      wordResult = wordList[i];
    }
  }

  return wordResult;
}

function findLongestWordEach(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) {
    throw new Error('Args is not array or array is empty');
  }

  let wordResult = wordList[0];
  wordList.forEach((word) => {
    if (word.length > wordResult.length) {
      wordResult = word;
    }
  });

  return wordResult;
}

function findLongestWord(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) {
    throw new Error('Args is not array or array is empty');
  }

  //  1. Arrow Function
  // return wordList.reduce((wordResult, word) => {
  //   if (word.length > wordResult.length) {
  //     return word;
  //   }
  //   return wordResult;
  // }, wordList[0]);

  return wordList.reduce((wordResult, word) =>
    word.length > wordResult.length ? word : wordResult,
  );
}

// 2. Arrow Function Shorthand

const wordList = ['a', 'aaaa', 'basdbaabb', 'abc'];

console.log(findLongestWordI(wordList));
console.log(findLongestWordEach(wordList));
console.log(findLongestWord(wordList));
