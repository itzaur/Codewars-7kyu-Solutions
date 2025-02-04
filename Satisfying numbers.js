/*
Description:

2520 is the smallest number that can be divided by each of the integers from 1 to 10 without any remainder.

Find the smallest positive number that is evenly divisible by all of the integers from 1 to n, (in this kata, 1≤n≤401 \le n \le 401≤n≤40).

For example:

5 --> 60      // 1 to 5 can all divide evenly into 60
10 --> 2520
*/
function smallest(n) {
  const gcd = (a, b) => (!b ? a : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);

  return Array.from({ length: n }, (_, i) => i + 1).reduce(lcm);
}

console.log(smallest(1)); //1
console.log(smallest(2)); //2
console.log(smallest(3)); //6
console.log(smallest(4)); //12
console.log(smallest(5)); //60
console.log(smallest(6)); //60
console.log(smallest(7)); //420
console.log(smallest(8)); //840
console.log(smallest(9)); //2520
console.log(smallest(10)); //2520
