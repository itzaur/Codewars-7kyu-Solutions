/*
Description:
Task

You have a list of integers. The task is to return the maximum sum of the elements located between two negative elements. No negative element should be present in the sum. If there is no such sum: -1 for Python, C++, JavaScript, Java, CoffeeScript and COBOL, Nothing for Haskell, None for Rust.
Example 1

[4, -1, 6, -2, 3, 5, -7, 7] -> 8
     ^      ^         ^

Sum between -1 and -2 is 6, between -2 and -7 is 3 + 5 = 8. It's also not 14 (between -1 and -7), because this includes a negative number (-2).
Example 2

[4, -1, -2] -> 0
     ^   ^

There is nothing between -1 and -2, so return 0.
*/
function maxSumBetweenTwoNegatives(a) {
  return a.reduce(
    (acc, el) => {
      return el < 0
        ? {
            ...acc,
            maxSum: acc.foundFirstNegative
              ? Math.max(acc.maxSum, acc.currentSum)
              : acc.maxSum,
            foundFirstNegative: true,
            currentSum: 0,
          }
        : acc.foundFirstNegative
          ? { ...acc, currentSum: acc.currentSum + el }
          : acc;
    },
    { maxSum: -1, currentSum: 0, foundFirstNegative: false },
  ).maxSum;
}
////////////////////////////////////////////!SECTION
// const maxSumBetweenTwoNegatives = (a) =>
//   a
//     .reduce(
//       ([sum, max], val) =>
//         val < 0 ? [0, Math.max(sum, max)] : [sum < 0 ? sum : sum + val, max],
//       [-1, -1],
//     )
//     .pop();

console.log(maxSumBetweenTwoNegatives([-1, 6, -2, 3, 5, -7])); //8
console.log(maxSumBetweenTwoNegatives([5, -1, -2])); //0
console.log(maxSumBetweenTwoNegatives([1, -2])); //-1
