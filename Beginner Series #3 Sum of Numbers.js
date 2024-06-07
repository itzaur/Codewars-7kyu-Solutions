/*
DESCRIPTION:
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.
*/
function getSum(a, b) {
  const result = Array.from({ length: a < b ? b - a + 1 : a - b + 1 }, (_, i) =>
    a < b ? a + i : b + i
  );

  return result.length ? result.reduce((acc, el) => acc + el) : -1;
  ////////////////////!SECTION
  //   return ((Math.abs(a - b) + 1) * (a + b)) / 2;
}

console.log(getSum(0, -1)); //-1
console.log(getSum(0, 1)); //1
console.log(getSum(2, 2)); //2
console.log(getSum(2, 6)); //20
console.log(getSum(5, -1)); //14
console.log(getSum(-5, -1)); //-15
console.log(getSum(-50, 0)); //-1275
