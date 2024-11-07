/*
Description:
Create a function mispelled(word1, word2):

mispelled('versed', 'xersed'); // returns true
mispelled('versed', 'applb'); // returns false
mispelled('versed', 'v5rsed'); // returns true
mispelled('1versed', 'versed'); // returns true
mispelled('versed', 'versed'); // returns true
It checks if the word2 differs from word1 by at most one character.

This can include an extra char at the end or the beginning of either of words.

In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.
*/
function mispelled(word1, word2) {
  const [a, b] = [word1, word2].sort((a, b) => b.length - a.length);

  if (a.includes(b) && a.length - b.length < 2) return true;

  return (
    [...a].map((el, i) => (el == [...b][i] ? el : '')).filter((el) => el)
      .length -
      a.length >=
    -1
  );
  ////////////////////////////////////!SECTION
  //   if (Math.abs(word1.length - word2.length) > 1) return false;

  //   if (~word1.indexOf(word2) || ~word2.indexOf(word1)) return true;

  //   return word1.split('').filter((e, i) => e != word2[i]).length == 1;
}
////////////////////////////////////!SECTION
// const mispelled = (word1, word2) =>
//   ((len) =>
//     len === 1
//       ? word2.includes(word1) || word1.includes(word2)
//       : !len
//       ? [...word1].reduce((pre, val, idx) => pre + (word2[idx] !== val), 0) ===
//         1
//       : false)(Math.abs(word1.length - word2.length));

console.log(mispelled('vertex', 'texver')); //false
console.log(mispelled('versed', 'xersed')); //true
console.log(mispelled('versed', 'applb')); //false
console.log(mispelled('versed', 'v5rsed')); //true
console.log(mispelled('1versed', 'versed')); //true
console.log(mispelled('versed', 'versed1')); //true
console.log(mispelled('versed', 'aversed')); //true
console.log(mispelled('aaversed', 'versed')); //false
console.log(mispelled('versed', 'aaversed')); //false
