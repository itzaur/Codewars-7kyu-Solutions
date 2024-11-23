/*
Description:
You would like to get the 'weight' of a name by getting the sum of the ascii values. However you believe that capital letters should be worth more than mere lowercase letters. Spaces, numbers, or any other character are worth 0.

Normally in ascii

a has a value of 97
A has a value of 65
' ' has a value of 32
0 has a value of 48
To find who has the 'weightier' name you will switch all the values so:

A will be 97
a will be 65
' ' will be 0
0 will be 0
etc...
For example Joe will have a weight of 254, instead of 286 using normal ascii values.
*/
function getWeight(name) {
  const ASCIICode = 65;

  return [...name].map((el) =>
    el == el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()
  ).join``
    .match(/[a-z]/gi)
    .map((el) => el.charCodeAt())
    .reduce((acc, el) => (el >= ASCIICode ? acc + el : acc), 0);
  //////////////////////////////////////////////!SECTION
  //   return s
  //     .match(/[a-z]/gi)
  //     .reduce((s, c) => ((c = c.charCodeAt()) & 32 ? c - 32 : c + 32) + s, 0);
  //////////////////////////////////////////////!SECTION
  //   return [...name.replace(/[^a-z]/gi, '')].reduce(
  //     (a, c) =>
  //       a +
  //       (c == c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()).charCodeAt(),
  //     0
  //   );
}

console.log(getWeight('Joe')); //254
console.log(getWeight('CJ')); //205
console.log(getWeight('cj')); //141
console.log(getWeight('r2d2')); //150
console.log(getWeight(`/$WdQ9&["k:`)); //375
