/*
DESCRIPTION:
Given a string of space separated words, return the longest word.
If there are multiple longest words, return the rightmost longest word.

Examples
"red white blue"  =>  "white"
"red blue gold"   =>  "gold"
*/
function longestWord(stringOfWords) {
  return stringOfWords.split` `.sort((a, b) => a.length - b.length).at(-1);
}

console.log(longestWord('lonely')); //'lonely'
console.log(longestWord('a pair')); //'pair'
console.log(longestWord('a b c d e fgh')); //'fgh'
console.log(longestWord('one two three')); //'three'
console.log(longestWord('red blue grey')); //'grey'
