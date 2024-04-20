/*
DESCRIPTION:
Make a program that takes a value (x) and returns "Bang" if the number is divisible by 3, "Boom" if it is divisible by 5, "BangBoom" if it divisible by 3 and 5, and "Miss" if it isn't divisible by any of them. Note: Your program should only return one value

Ex: Input: 105 --> Output: "BangBoom" Ex: Input: 9 --> Output: "Bang" Ex:Input: 25 --> Output: "Boom"
*/
function multiple(x) {
  switch (true) {
    case x % 3 === 0 && x % 5 === 0:
      return 'BangBoom';
    case x % 3 === 0:
      return 'Bang';
    case x % 5 === 0:
      return 'Boom';
    default:
      return 'Miss';
  }
  //////////////////!SECTION
  //   return !(x % 15)
  //     ? `BangBoom`
  //     : !(x % 3)
  //     ? `Bang`
  //     : !(x % 5)
  //     ? `Boom`
  //     : `Miss`;
}

console.log(multiple(30)); //'BangBoom'
console.log(multiple(3)); //'Bang'
console.log(multiple(98)); //'Miss'
console.log(multiple(65)); //'Boom'
console.log(multiple(23)); //'Miss'
console.log(multiple(15)); //'BangBoom'
