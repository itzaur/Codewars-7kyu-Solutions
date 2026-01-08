/*
Description:

Given an array of integers, return the smallest common factors of all integers in the array.

When i say Smallest Common Factor i mean the smallest number above 1 that can divide all numbers in the array without a remainder.

scf([200, 30, 18, 8, 64, 34]) //=> 2
scf([21, 45, 51, 27, 33]) //=> 3
scf([133, 147, 427, 266]) //=> 7

If there are no common factors above 1, return 1 (technically 1 is always a common factor).
*/
function scf(array) {
  return array.length === 0
    ? 1
    : array.reduce((acc, el) => {
        const min = Math.min(acc, el);

        for (let i = 2; i <= min; i++) {
          if (array.every((num) => num % i === 0)) {
            return i;
          }
        }

        return 1;
      });
}

console.log(scf([200, 30, 18, 8, 64, 34])); //2
console.log(scf([21, 45, 51, 27, 33])); //3
console.log(scf([133, 147, 427, 266])); //7
console.log(scf([3, 5, 7])); //1
console.log(scf([])); //1
console.log(
  scf([
    6680, 12024, 10688, 8684, 2004, 4676, 7348, 4676, 2004, 11356, 5344, 6012,
    6012, 10020, 12692, 6680, 4008, 2672, 12024, 5344,
  ])
); //2
