/*
Description:

You're given two integers – n and k. n is always positive, while k >= 0. Write a function that returns first k odd digits in a number n.

The output should also be an integer.

In the following cases a function should return 0:

    there are no odd digits in a number n;
    k is bigger than a number of digits in n;
    k = 0;
    k is bigger than a number of odd digits in n.

BTW, is 0 an odd number or an even one?
*/
function findOddDigits(n, k) {
  const result = `${n}`.split``.filter((el) => el % 2);

  if (k > result.length || k === 0) return 0;

  return +result.slice(0, k).join``;
}
////////////////////////////////////////////!SECTION
// const findOddDigits = (n, k, odd) =>
//   (odd = String(n).replace(/[02468]/g, '')).length >= k ? +odd.slice(0, k) : 0;

console.log(findOddDigits(123456789111, 5)); //13579
console.log(findOddDigits(7459274655920285, 8)); //75975595
console.log(findOddDigits(0, 100)); //0
console.log(findOddDigits(103756254800023, 2)); //13
console.log(findOddDigits(20406886, 6)); //0
console.log(findOddDigits(11111333333307, 13)); //1111133333337
console.log(findOddDigits(30982, 3)); //0
