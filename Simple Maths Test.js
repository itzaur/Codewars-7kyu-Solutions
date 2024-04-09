/*
DESCRIPTION:
Create a function which checks a number for three different properties.

is the number prime?
is the number even?
is the number a multiple of 10?
Each should return either true or false, which should be given as an array. Remark: The Haskell variant uses data Property.

Examples
numberProperty(7)  // ==> [true,  false, false]
numberProperty(10) // ==> [false, true,  true]
The number will always be an integer, either positive or negative. Note that negative numbers cannot be primes, but they can be multiples of 10:

numberProperty(-7)  // ==> [false, false, false]
numberProperty(-10) // ==> [false, true,  true]
*/
function numberProperty(n) {
  return [isPrime(n), isEven(n), isMultipleOf10(n)];
  ////////////////!SECTION
  //   return [
  //     n > 1 && [...Array(~~(n ** 0.5) - 1)].every((_, idx) => n % (idx + 2)),
  //     !(n % 2),
  //     !(n % 10),
  //   ];
}

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
}

function isEven(number) {
  return number % 2 === 0;
}

function isMultipleOf10(number) {
  return number % 10 === 0;
}

console.log(numberProperty(-10)); //[false,true,true]
console.log(numberProperty(2)); //[true,true,false]
console.log(numberProperty(120)); //[false,true,true]
console.log(numberProperty(125)); //[false,false,false]
