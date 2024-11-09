/*
Description:
Task
Implement a function which takes a number N and returns the N'th row of the sequence below. If the argument is greater than the number of rows in the sequence, then start from the beginning again, e.g. row 27 is the same as row 1.

Sequence
1:  ABCDEFGHIJKLMNOPQRSTUVWXYZ
2:  BBCDEFGHIJKLMNOPQRSTUVWXYZ
3:  CCCDEFGHIJKLMNOPQRSTUVWXYZ
4:  DDDDEFGHIJKLMNOPQRSTUVWXYZ
5:  EEEEEFGHIJKLMNOPQRSTUVWXYZ
6:  FFFFFFGHIJKLMNOPQRSTUVWXYZ
7:  GGGGGGGHIJKLMNOPQRSTUVWXYZ
8:  HHHHHHHHIJKLMNOPQRSTUVWXYZ
9:  IIIIIIIIIJKLMNOPQRSTUVWXYZ
10: JJJJJJJJJJKLMNOPQRSTUVWXYZ
11: KKKKKKKKKKKLMNOPQRSTUVWXYZ
12: LLLLLLLLLLLLMNOPQRSTUVWXYZ
13: MMMMMMMMMMMMMNOPQRSTUVWXYZ
14: NNNNNNNNNNNNNNOPQRSTUVWXYZ
15: OOOOOOOOOOOOOOOPQRSTUVWXYZ
16: PPPPPPPPPPPPPPPPQRSTUVWXYZ
17: QQQQQQQQQQQQQQQQQRSTUVWXYZ
18: RRRRRRRRRRRRRRRRRRSTUVWXYZ
19: SSSSSSSSSSSSSSSSSSSTUVWXYZ
20: TTTTTTTTTTTTTTTTTTTTUVWXYZ
21: UUUUUUUUUUUUUUUUUUUUUVWXYZ
22: VVVVVVVVVVVVVVVVVVVVVVWXYZ
23: WWWWWWWWWWWWWWWWWWWWWWWXYZ
24: XXXXXXXXXXXXXXXXXXXXXXXXYZ
25: YYYYYYYYYYYYYYYYYYYYYYYYYZ
26: ZZZZZZZZZZZZZZZZZZZZZZZZZZ
*/
function getRow(n) {
  const alphabetLength = 26;
  const ASCIICode = 65;

  const alphabet = [...Array(alphabetLength).keys()].map((el) =>
    String.fromCharCode(ASCIICode + el)
  ).join``;

  const index =
    n <= alphabetLength
      ? n
      : n % alphabetLength == 0
      ? alphabetLength
      : n % alphabetLength;

  return alphabet.slice(index).padStart(alphabetLength, alphabet[index - 1]);
  //////////////////////////////////////!SECTION
  //   return Array.from({ length: 26 - ((n - 1) % 26) }, (_, i) =>
  //     String.fromCharCode(i + ((n - 1) % 26) + 65)
  //   )
  //     .join('')
  //     .padStart(26, String.fromCharCode(((n - 1) % 26) + 65));
}

console.log(getRow(1)); //"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(getRow(26)); //"ZZZZZZZZZZZZZZZZZZZZZZZZZZ"
console.log(getRow(15)); //"OOOOOOOOOOOOOOOPQRSTUVWXYZ"
console.log(getRow(27)); //"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
