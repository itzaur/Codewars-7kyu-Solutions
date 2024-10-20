/*
Description:
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/
function longest(s1, s2) {
  return [...new Set(s1 + s2)].sort().join``;
  ////////////////////////////////!SECTION
  //   return (s1 + s2)
  //     .split('')
  //     .sort()
  //     .join('')
  //     .replace(/(.)\1+/g, '$1');
}

console.log(longest('aretheyhere', 'yestheyarehere')); //'aehrsty'
console.log(longest('loopingisfunbutdangerous', 'lessdangerousthancoding')); //'abcdefghilnoprstu'
console.log(longest('inmanylanguages', 'theresapairoffunctions')); //'acefghilmnoprstuy'