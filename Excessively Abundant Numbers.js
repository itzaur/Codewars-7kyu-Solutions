/*
DESCRIPTION:
An abundant number or excessive number is a number for which the sum of its proper divisors is greater than the number itself.

The integer 12 is the first abundant number. Its proper divisors are 1, 2, 3, 4 and 6 for a total of 16 (> 12).

Derive function abundantNumber(num)/abundant_number(num) which returns true/True/.true. if num is abundant, false/False/.false. if not.
*/
function abundantNumber(num) {
  return (
    Array.from({ length: num - 1 }, (_, i) => i + 1)
      .filter((el) => Number.isInteger(num / el))
      .reduce((acc, el) => acc + el, 0) > num
  );
  //////////////////////////////!SECTION
  //   return (
  //     [...Array(num >> 1)].reduce(
  //       (pre, _, idx) => pre + (!(num % ++idx) && idx),
  //       0
  //     ) > num
  //   );
}

console.log(abundantNumber(18)); //true
console.log(abundantNumber(37)); //false
console.log(abundantNumber(120)); //true
console.log(abundantNumber(77)); //false
