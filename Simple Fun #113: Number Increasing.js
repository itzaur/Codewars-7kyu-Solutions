/*
DESCRIPTION:
Task
Initially a number 1 is written on a board. It is possible to do the following operations with it:

 multiply the number by 3; increase the number by 5. Your task is to determine that using this two operations step by step, is it possible to obtain number n?

Example
For n = 1, the result should be true.

1 = 1

For n = 2, the result should be false.

For n = 3, the result should be true.

1 x 3 = 3

For n = 4, the result should be false.

For n = 5, the result should be false.

For n = 6, the result should be true.

1 + 5 = 6

For n = 18, the result should be true.

1 + 5 = 6  --> 6 x 3 = 18

For n = 32, the result should be true.

1 x 3 x 3 x 3 = 27  --> 27 + 5 = 32

For n = 100, the result should be false.

For n = 101, the result should be true.

1 + 5 + 5 + 5 ... +5 = 101

Input / Output
[input] integer n
positive integer, n ≤ 100000

[output] a boolean value
true if N can be obtained using given operations, false otherwise.
*/
function numberIncreasing(n) {
  while (n > 1) {
    for (let i = 1; i <= n; i *= 3) {
      if (i === n) return true;
    }

    for (let j = 1; j <= n; j += 5) {
      if (j === n) return true;
    }

    if (n % 3 == 0) n /= 3;
    else n -= 5;
  }

  return n === 1 ? true : false;
  ////////////////////////////////////!SECTION
  //   const set = new Set([1]);

  //   for (let i = 1; i < n; i++) if (set.has(i)) set.add(i * 3).add(i + 5);

  //   return set.has(n);
}

console.log(numberIncreasing(1)); //true
console.log(numberIncreasing(2)); //false
console.log(numberIncreasing(3)); //true
console.log(numberIncreasing(4)); //false
console.log(numberIncreasing(5)); //false
console.log(numberIncreasing(6)); //true
console.log(numberIncreasing(100)); //false
console.log(numberIncreasing(101)); //true
console.log(numberIncreasing(12345)); //false
console.log(numberIncreasing(54321)); //true
console.log(numberIncreasing(18)); //true
console.log(numberIncreasing(32)); //true
