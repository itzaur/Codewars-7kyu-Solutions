/*
Description:

Complete the function which takes a non-zero integer as its argument.

If the integer is divisible by 3, return the string "Java".

If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

If one of the condition above is true and the integer is even, add "Script" to the end of the string.

If none of the condition is true, return the string "mocha_missing!"
Examples

1   -->  "mocha_missing!"
3   -->  "Java"
6   -->  "JavaScript"
12  -->  "CoffeeScript"
*/
function caffeineBuzz(n) {
  switch (true) {
    case n % 12 === 0:
      return 'CoffeeScript';
    case n % 6 === 0:
      return 'JavaScript';
    case n % 3 === 0:
      return 'Java';
    default:
      return 'mocha_missing!';
  }
  //////////////////////////////////////////////!SECTION
  // return !(n % 3)
  //   ? `${!(n % 4) ? `Coffee` : `Java`}${!(n % 2) ? `Script` : ``}`
  //   : `mocha_missing!`;
  //////////////////////////////////////////////!SECTION
  // return ['mocha_missing!', 'Java', 'JavaScript', 'CoffeeScript'][
  //   !(n % 3) + !(n % 6) + !(n % 12)
  // ];
}

console.log(caffeineBuzz(1)); //"mocha_missing!"
console.log(caffeineBuzz(3)); //"Java"
console.log(caffeineBuzz(12)); //"CoffeeScript"
console.log(caffeineBuzz(6)); //"JavaScript"
