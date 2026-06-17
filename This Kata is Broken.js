/*
Description:

(Imagine the following spoken in the voice of GlaDOS from Portal...)

We regret to inform you that this next kata is impossible. Make no attempt to solve it.

Do not be fooled by anyone who tells you to "think outside the box" or "know when to break the rules." They obviously just want to encourage you to try so they can watch you fail.

Again, we apologize for this clearly broken kata.
*/
var i = 0;

function solution() {
  return [71, 108, 97, 68, 79, 83][i++ % 6];
}
////////////////////////////////!SECTION
// var i=0;
// function solution() {
//   return 'GlaDOS'.charCodeAt(i++%6);
// }

console.log(solution()); //71
console.log(solution()); //108
console.log(solution()); //97
console.log(solution()); //68
console.log(solution()); //79
console.log(solution()); //83
