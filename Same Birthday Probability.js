/*
Description:

Given n number of people in a room, calculate the probability that any two people in that room have the same birthday (assume 365 days every year = ignore leap year). Answers should be two decimals unless whole (0 or 1) eg 0.05
*/
function calculateProbability(n) {
  let comparisons = 1;

  for (let i = 1; i < n; i++) {
    comparisons *= 1 - i / 365;
  }

  return (Math.round((1 - comparisons) * 100) / 100).toFixed(2);
  //////////////////////////////////////////////!SECTION
  //   return (
  //     1 -
  //     Array.from({ length: n }, (_, i) => 365 - i).reduce(
  //       (acc, cur) => acc * (cur / 365),
  //       1
  //     )
  //   ).toFixed(2);
}

console.log(calculateProbability(5)); //'0.03'
console.log(calculateProbability(1000)); //'1.00'
