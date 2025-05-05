/*
Description:
Lojban Numbers
Counting in Lojban, an artificial language developed over the last forty years, is easier than in most languages. The numbers from zero to nine are:

1 pa 4 vo 7 ze
2 re 5 mu 8 bi 0 no
3 ci 6 xa 9 so
Larger numbers are created by gluing the digits together. For example, 123 is pareci.

Write a program that reads in a Lojban string (representing a number less than or equal to 1,000,000) and outputs it in numbers.

Example:
renonore  # Lojban string
2002  # Number
Input/Output
[input] string representing the number in Lojban pareci
Constraints: Lojban number ≤ 1,000,000
[output] integer representing the Lojban number 123
Source: 2002 British Informatics Olympiad
*/
function convertLojban(lojban) {
  const arr = [];
  const options = {
    pa: 1,
    vo: 4,
    ze: 7,
    re: 2,
    mu: 5,
    bi: 8,
    no: 0,
    ci: 3,
    xa: 6,
    so: 9,
  };

  for (let i = 0; i < lojban.length; i += 2) {
    arr.push(lojban.slice(i, i + 2));
  }

  return +arr.map((el) => options[el]).join``;
  //////////////////////////////////////////////!SECTION
  //   return +lojban.replace(/../g, (s) => 'nprcvmxzbs'.search(s[0]));
}

console.log(convertLojban('pareci')); //123
console.log(convertLojban('renonore')); //2002
