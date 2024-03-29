/*
DESCRIPTION:
You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

Examples
"abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
"abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
"123abc!" is a valid word because all of the characters only appear once in the word.
*/
function validateWord(s) {
  const occurrences = [...s.toLowerCase()].reduce((acc, el) => {
    return { ...acc, [el]: (acc[el] || 0) + 1 };
  }, {});

  return Object.values(occurrences).every((el, _, arr) => el === arr[0]);
}

console.log(validateWord('abcabc')); //true
console.log(validateWord('Abcabc')); //true
console.log(validateWord('abc123')); //true
console.log(validateWord('abcabcd')); //false
console.log(validateWord('abc!abc!')); //true
console.log(validateWord('abc:abc')); //false
