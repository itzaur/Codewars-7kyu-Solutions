/*
Description:
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string
*/
function mxdiflg(a1, a2) {
  return (
    (a1.length &&
      a2.length &&
      Math.max(
        a1.sort((a, b) => b.length - a.length)[0].length -
          a2.sort((a, b) => a.length - b.length)[0].length,
        a2.sort((a, b) => b.length - a.length)[0].length -
          a1.sort((a, b) => a.length - b.length)[0].length
      )) ||
    -1
  );
  //////////////////////////////////////////////////!SECTION
  // return a1.reduce(
  //   (pre, val) =>
  //     Math.max(
  //       pre,
  //       a2.reduce((p, v) => Math.max(p, Math.abs(val.length - v.length)), -1)
  //     ),
  //   -1
  // );
  //////////////////////////////////////////////////!SECTION
  // return !a1.length || !a2.length
  //   ? -1
  //   : Math.max(
  //       ...a1.map((x) =>
  //         Math.max(...a2.map((y) => Math.abs(y.length - x.length)))
  //       )
  //     );
}

var s1 = [
  'hoqq',
  'bbllkw',
  'oox',
  'ejjuyyy',
  'plmiis',
  'xxxzgpsssa',
  'xxwwkktt',
  'znnnnfqknaz',
  'qqquuhii',
  'dvvvwz',
];
var s2 = ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww'];
console.log(mxdiflg(s1, s2)); //13
console.log(mxdiflg([], ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww'])); //-1
