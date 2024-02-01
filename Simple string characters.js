/*
DESCRIPTION:
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3].
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!
*/
function solve(s) {
  const uppercaseLetters = [];
  const lowercaseLetters = [];
  const numbers = [];
  const specialCharacters = [];

  for (const el of s) {
    switch (true) {
      case el >= 0:
        numbers.push(el);
        break;
      case !el.match(/\W|_/):
        el === el.toUpperCase()
          ? uppercaseLetters.push(el)
          : lowercaseLetters.push(el);
        break;
      default:
        specialCharacters.push(el);
        break;
    }
  }

  return [
    uppercaseLetters.length,
    lowercaseLetters.length,
    numbers.length,
    specialCharacters.length,
  ];

  //   let u = x.match(/[A-Z]/g)||[]
  //   let d = x.match(/[a-z]/g)||[]
  //   let n = x.match(/[0-9]/g)||[]
  //   let s = x.match(/[^A-Z0-9]/gi)||[]
  //   return [u.length, d.length, n.length, s.length]

  //   return Object.values(
  //     [...s].reduce(
  //       (acc, char) => {
  //         switch (true) {
  //           case /[A-Z]/.test(char):
  //             acc.upper++;
  //             break;
  //           case /[a-z]/.test(char):
  //             acc.lower++;
  //             break;
  //           case /[0-9]/.test(char):
  //             acc.number++;
  //             break;
  //           default:
  //             acc.other++;
  //         }

  //         return acc;
  //       },
  //       { upper: 0, lower: 0, number: 0, other: 0 }
  //     )
  //   );
}

console.log(solve('')); //[0,0,0,0]
console.log(solve('aAbBcC')); //[3,3,0,0]
console.log(solve('Codewars@codewars123.com')); //[1,18,3,2]
console.log(solve('bgA5<1d-tOwUZTS8yQ')); //[7,6,3,2]
console.log(solve('P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H')); //[9,9,6,9]
console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD")); //[15,8,6,9]
console.log(solve('$Cnl)Sr<7bBW-&qLHI!mY41ODe')); //[10,7,3,6]
console.log(solve('@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft')); //[7,13,4,10]
