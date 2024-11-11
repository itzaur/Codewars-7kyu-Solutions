/*
Description:
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
*/
function moveTen(s) {
  const ASCIICode = 65;
  const zLetterCode = 122;
  const ruleNumber = 10;

  return [...s]
    .map((el) =>
      String.fromCharCode(
        el.charCodeAt() + ruleNumber > zLetterCode
          ? el.charCodeAt() + ruleNumber - zLetterCode + ASCIICode - 1
          : el.charCodeAt() + ruleNumber
      )
    )
    .map((el) => el.toLowerCase()).join``;
  //////////////////////////////////////////!SECTION
  //   return s
  //     .split('')
  //     .map((e) =>
  //       e.charCodeAt(0) + 10 > 122
  //         ? String.fromCharCode(e.charCodeAt(0) - 16)
  //         : String.fromCharCode(e.charCodeAt(0) + 10)
  //     )
  //     .join('');
  //////////////////////////////////////////!SECTION
  //   s.replace(/./g, (val) =>
  //     String.fromCharCode(97 + ((val.charCodeAt() - 87) % 26))
  //   );
  //////////////////////////////////////////!SECTION
  //   return s.replace(/[a-z]/g, (char) =>
  //     String.fromCharCode(97 + ((char.charCodeAt(0) - 97 + 10) % 26))
  //   );
}

console.log(moveTen('testcase')); //"docdmkco"
console.log(moveTen('codewars')); //"mynogkbc"
console.log(moveTen('exampletesthere')); //"ohkwzvodocdrobo"
