/*
Description:
Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

So:

Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.
*/
function mostLikely(prob1, prob2) {
  const [a1, b1] = prob1.split(':');
  const [a2, b2] = prob2.split(':');

  return a1 / b1 > a2 / b2;
  //////////////////////////////////!SECTION
  //   return (
  //     prob1.split(':').reduce((a, b) => a / b) >
  //     prob2.split(':').reduce((a, b) => a / b)
  //   );
}
//////////////////////////////////!SECTION
// const mostLikely = (prob1, prob2) =>
//   ((fn) => fn(prob1) > fn(prob2))((str) =>
//     str.split(`:`).reduce((pre, val) => pre / val)
//   );

console.log(mostLikely('1:3', '1:2')); //false
console.log(mostLikely('167:236', '271:196')); //false
