/*
Description:

An eviternity number is a number which:

    contains only digits 8, 5 and 3, and
    the count of the digit 8 >= count of digit 5 >= count of digit 3.

The first few eviternity numbers are as follows.

[8, 58, 85, 88, 358, 385, 538, 583, 588, 835, 853, 858, 885, 888]

You will be given two integers, a and b, and your task is to return the number of eviternity numbers in the range >= a and < b.

For example:
a=0, b=1000 => 14, because they are [8, 58, 85, 88, 358, 385, 538, 583, 588, 835, 853, 858, 885, 888]

The upper bound will not exceed 500,000.

More examples in test cases. Good luck!
*/
function solve(a, b) {
  const eviternityNumbers = [];

  for (let i = a; i < b; i++) {
    const el = `${i}`;

    if (/^[853]+$/.test(el)) {
      const count8 = (el.match(/8/g) || []).length;
      const count5 = (el.match(/5/g) || []).length;
      const count3 = (el.match(/3/g) || []).length;

      if (count8 >= count5 && count5 >= count3) {
        eviternityNumbers.push(i);
      }
    }
  }

  return eviternityNumbers.length;
}
////////////////////////////////////////!SECTION
// const solve = (a, b) =>
//   [...Array(b - a)]
//     .map((_, idx) => `${idx + a}`)
//     .filter((val) => /^[358]+$/.test(val))
//     .map((val) => [
//       val.match(/8|$/g).length,
//       val.match(/5|$/g).length,
//       val.match(/3|$/g).length,
//     ])
//     .reduce((pre, [$8, $5, $3]) => pre + ($8 >= $5 && $5 >= $3), 0);

console.log(solve(0, 100)); //4
console.log(solve(0, 1000)); //14
console.log(solve(0, 10000)); //37
console.log(solve(0, 100000)); //103
console.log(solve(0, 500000)); //148
