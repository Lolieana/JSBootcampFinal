/* eslint-disable no-param-reassign */
// see example below.

function mostVowels(str) {
  str = str.toLowerCase();
  const vowels = 'aeiou';
  let currentWord = '';
  let numVowels = 0;
  let mostVowelsNum = 0;
  let wordToReturn = '';
  for (let i = 0; i < str.length; i++) {
    const letter = str[i].toLowerCase();
    currentWord += letter;
    if (vowels.includes(letter)) {
      numVowels++;
    } else if (letter === ' ' || i === str.length - 1) {
      if (numVowels > mostVowelsNum) {
        mostVowelsNum = numVowels;
        wordToReturn = currentWord;
      }
      numVowels = 0;
      currentWord = '';
    }
  }
  return wordToReturn.trim();
}

module.exports = { mostVowels };
