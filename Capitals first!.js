/*
DESCRIPTION:
Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.

If a word starts with a number or special character, skip the word and leave it out of the result.

Input String will not be empty.

For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"
*/
function capitalsFirst(str) {
  const arr = str.split` `.filter((el) => el[0].match(/[a-z]/gi));
  const uppercaseWords = arr.filter((el) => el[0].toUpperCase() === el[0]);
  const lowercaseWords = arr.filter((el) => el[0].toLowerCase() === el[0]);

  return [...uppercaseWords, ...lowercaseWords].join` `;
}

console.log(capitalsFirst('hey You, Sort me Already!')); //'You, Sort Already! hey me'
console.log(capitalsFirst('Sri2 Lmov 7q#x3 Tjlxy +yhjj5')); //'Sri2 Lmov Tjlxy'
