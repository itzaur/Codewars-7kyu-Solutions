/*
Description:
Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

Example:

(6,1,3)--> true because 6 is divisible by 1 and 3
(12,2)--> true because 12 is divisible by 2
(100,5,4,10,25,20)--> true
(12,7)--> false because 12 is not divisible by 7
*/
function isDivisible(...args) {
  const [firstElement, ...rest] = args;

  return rest.every((el) => firstElement % el == 0);
}
//////////////////////////////////!SECTION
// function isDivisible(firstN, ...otherN) {
//   return otherN.every((n) => firstN % n === 0);
// }
//////////////////////////////////!SECTION
// const isDivisible = (n, ...rest) => rest.every((val) => !(n % val));

console.log(isDivisible(3, 3, 4)); //false
console.log(isDivisible(12, 3, 4)); //true
console.log(isDivisible(8, 3, 4, 2, 5)); //false
