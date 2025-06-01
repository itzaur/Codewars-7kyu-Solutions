/*
Description:

Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]

See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.
*/
function solve(arr) {
  const ALPHABET_LENGTH = 26;
  const ASCII_OFFSET = 97;
  const alphabet = Array.from({ length: ALPHABET_LENGTH }, (_, i) =>
    String.fromCharCode(i + ASCII_OFFSET)
  );

  return arr.map((word) =>
    word
      .toLowerCase()
      .replace(/[a-z]/gi, (el, i) => (el === alphabet[i] ? 1 : ''))
      .split``.reduce((acc, el) => acc + +el, 0)
  );
  ////////////////////////////////////////////////////////!SECTION
  //   return arr.map((x) =>
  //     [...x.toLowerCase()].reduce((s, v, i) => s + (v.charCodeAt() == i + 97), 0)
  //   );
  ////////////////////////////////////////////////////////!SECTION
  //   return arr.map(
  //     (val) =>
  //       [...val.toUpperCase()].filter((val, idx) => val.charCodeAt() - 65 === idx)
  //         .length
  //   );
}

console.log(solve(['abode', 'ABc', 'xyzD'])); //[4,3,1]
console.log(solve(['abide', 'ABc', 'xyz'])); //[4,3,0]
console.log(solve(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc'])); //[6, 5, 7]
console.log(solve(['encode', 'abc', 'xyzD', 'ABmD'])); //[1, 3, 1, 3]
