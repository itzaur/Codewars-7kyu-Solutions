/*
Description:
Change every letter in a given string to the next letter in the alphabet. The function takes a single parameter s (string).

Notes:

Spaces and special characters should remain the same.
Capital letters should transfer in the same way but remain capitilized.
Examples
"Hello"               -->  "Ifmmp"
"What is your name?"  -->  "Xibu jt zpvs obnf?"
"zoo"                 -->  "app"
"zzZAaa"              -->  "aaABbb"
*/
function nextLetter(str) {
  const alphabetLength = 26;
  const AASCIICode = 65;
  const aASCIICode = 97;

  return str
    .replace(/[a-z]/g, (el) =>
      String.fromCharCode(
        aASCIICode + ((el.charCodeAt() - aASCIICode + 1) % alphabetLength)
      )
    )
    .replace(/[A-Z]/g, (el) =>
      String.fromCharCode(
        AASCIICode + ((el.charCodeAt() - AASCIICode + 1) % alphabetLength)
      )
    );
  //////////////////////////////////////////!SECTION
  //   return str.replace(/[a-zA-Z]/g, function (c) {
  //     switch (c) {
  //       case 'z':
  //         return 'a';
  //       case 'Z':
  //         return 'A';
  //       default:
  //         return String.fromCharCode(c.charCodeAt(0) + 1);
  //     }
  //   });
  //////////////////////////////////////////!SECTION
  //   return str.replace(/\w/gi, (x) =>
  //     String.fromCodePoint(
  //       x.charCodeAt() + 1 === 91
  //         ? 65
  //         : x.charCodeAt() + 1 === 123
  //         ? 97
  //         : x.charCodeAt() + 1
  //     )
  //   );
  //////////////////////////////////////////!SECTION
  //   return str.replace(/[a-z]/gi, (m) =>
  //     String.fromCharCode(m.charCodeAt(0) + (/z/i.test(m) ? -25 : 1))
  //   );
  //////////////////////////////////////////!SECTION
  //   return str.replace(/[a-z]/gi, (val) =>
  //     val.charCodeAt() === 90
  //       ? `A`
  //       : val.charCodeAt() === 122
  //       ? `a`
  //       : String.fromCharCode(val.charCodeAt() + 1)
  //   );
}

console.log(nextLetter('My Name Is Zoo')); //"Nz Obnf Jt App"
console.log(nextLetter('What is your name')); //"Xibu jt zpvs obnf"
console.log(nextLetter('zOo')); //"aPp"
console.log(nextLetter('FDZgZCTDZFaWG i')); //"GEAhADUEAGbXH j"
