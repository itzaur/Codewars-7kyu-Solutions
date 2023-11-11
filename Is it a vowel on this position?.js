/*
DESCRIPTION:
Check if it is a vowel(a, e, i, o, u,) on the n position in a string (the first argument). Don't forget about uppercase.

A few cases:

{
checkVowel('cat', 1)  ->   true // 'a' is a vowel
checkVowel('cat', 0)  ->   false // 'c' is not a vowel
checkVowel('cat', 4)  ->   false // this position doesn't exist
}
P.S. If n < 0, return false
*/
function checkVowel(string, position) {
  return string[position] ? /[aeiou]/gi.test(string[position]) : false;

  //   return /[aeiou]/i.test(string[position] || ``);

  //   return !!string.charAt(position).match(/[aeiou]/i);
}

console.log(checkVowel('cat', 1)); //true
console.log(checkVowel('cat', 0)); //false
console.log(checkVowel('cat', 4)); //false
console.log(checkVowel('Amanda', -2)); //false
console.log(checkVowel('Amanda', 0)); //true
console.log(checkVowel('Amanda', 2)); //true
