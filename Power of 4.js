/*
Description:
Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

(In C# Integer means all integer Types like Int16,Int32,.....)

Examples
powerOf4(1024) // returns true
powerOf4(44) // returns false
powerOf4("not a positive integer") // returns false
*/
function powerOf4(n) {
  return n === +n && Number.isInteger(Math.log2(n)) && Math.log2(n) % 2 === 0;
  //////////////////////////////////////!SECTION
  //   return typeof n === 'number' && Math.log2(n) % 2 === 0;
}

console.log(powerOf4(4)); //true
console.log(powerOf4(16)); //true
console.log(powerOf4(1)); //true
console.log(powerOf4(8)); //false
console.log(powerOf4(20)); //false
console.log(powerOf4(32)); //false
console.log(powerOf4(44)); //false
console.log(powerOf4(3.1415)); //false
console.log(powerOf4('1')); //false
console.log(powerOf4('4')); //false
console.log(powerOf4(null)); //false
console.log(powerOf4(undefined)); //false
console.log(powerOf4(function () {})); //false
