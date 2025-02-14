/*
Description:
Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
Note that if the range is given in capital letters, return the string in capitals also!

Examples
"a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
"h-o" ➞ "hijklmno"
"Q-Z" ➞ "QRSTUVWXYZ"
"J-J" ➞ "J"
Notes
A hyphen will separate the two letters in the string.
You don't need to worry about error handling in this kata (i.e. both letters will be the same case and the second letter will not be before the first alphabetically).
*/
function gimmeTheLetters(sp) {
  const [start, end] = sp.split`-`.map((el) => el.charCodeAt());
  const array = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return array.map((el) => String.fromCharCode(el)).join``;
}

console.log(gimmeTheLetters('J-J')); //'J'
console.log(gimmeTheLetters('Z-Z')); //'Z'
console.log(gimmeTheLetters('a-a')); //'a'
console.log(gimmeTheLetters('a-b')); //'ab'
console.log(gimmeTheLetters('y-z')); //'yz'
console.log(gimmeTheLetters('H-I')); //'HI'
console.log(gimmeTheLetters('g-i')); //'ghi'
console.log(gimmeTheLetters('W-Y')); //'WXY'
console.log(gimmeTheLetters('Q-Z')); //'QRSTUVWXYZ'
