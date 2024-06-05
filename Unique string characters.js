/*
DESCRIPTION:
In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc"
--The first string has 'yb' which is not in the second string.
--The second string has 'zc' which is not in the first string.
Notice also that you return the characters from the first string concatenated with those from the second string.

More examples in the tests cases.

Good luck!

Please also try Simple remove duplicates
*/
function solve(a, b) {
  const firstArr = [...a].filter((el) => !b.includes(el)).join``;
  const secondArr = [...b].filter((el) => !a.includes(el)).join``;

  return firstArr + secondArr;
  ////////////////////////!SECTION
  //   return [...(a + b)]
  //     .filter((val) => !a.includes(val) || !b.includes(val))
  //     .join(``);
  ////////////////////////!SECTION
  //   return [...a, ...b].reduce(
  //     (acc, cur) => (acc += a.includes(cur) && b.includes(cur) ? '' : cur),
  //     ''
  //   );
}

console.log(solve('xyab', 'xzca')); //"ybzc"
console.log(solve('xyabb', 'xzca')); //"ybbzc"
console.log(solve('abcd', 'xyz')); //"abcdxyz"
console.log(solve('xxx', 'xzca')); //"zca"
