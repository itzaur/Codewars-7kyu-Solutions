/*
Description:
Split & Add

A sequence satisfies the recurrence relation

    am+n=am+an+y∗m∗n a_{m+n} = a_m + a_n + y * m * n am+n​=am​+an​+y∗m∗n

for all non-negative integers m m m and n n n, where y y y is a fixed non-negative integer.

Given: a1=1 a_1 = 1 a1​=1, regardless of the value of y y y

Write a function that returns the value of ax a_x ax​ for given x,y x, y x,y.
Constraints

0 ≤ x ≤ 10^8
0 ≤ y ≤ 10^4
*/
function solve(x, y) {
  const x_ = BigInt(x);
  const y_ = BigInt(y);

  return x_ + (y_ * x_ * (x_ - 1n)) / 2n;
}

console.log(solve(0n, 5n)); //0n
console.log(solve(0n, 1000n)); //0n
console.log(solve(1n, 5n)); //1n
console.log(solve(2n, 5n)); //7n
console.log(solve(3n, 5n)); //18n
console.log(solve(10n, 0n)); //10n
