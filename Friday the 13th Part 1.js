/*
Description:
It's Friday the 13th, and Jason is ready for his first killing spree!

Create a function, killcount, that accepts two arguments: an array of array pairs (the conselor's name and intelligence - ["Chad", 2]) and an integer representing Jason's intellegence.

Ruby, Python, Crystal:

counselors = [["Chad", 2], ["Tommy", 9]]
jason = 7
JavaScript:

var counselors = [["Chad", 2], ["Tommy", 9]];
var jason = 7;
PHP:

$counselors = [["Chad", 2], ["Tommy", 9]];
$jason = 7;
Your function must return an array of the names of all the counselors who can be outsmarted and killed by Jason.

Happy Friday the 13th!
*/
function killcount(counselors, jason) {
  return counselors
    .filter(([_, intelligence]) => intelligence < jason)
    .map(([name]) => name);
}
////////////////////////////////////////////////!SECTION
// const killcount = (counselors, jasonIntelligence) =>
//   counselors.reduce(
//     (acc, [victimName, victimIntelligence]) =>
//       jasonIntelligence > victimIntelligence ? [...acc, victimName] : acc,
//     []
//   );

var counselors = [
  ['Mike', 7],
  ['Alysa', 3],
];
console.log(killcount(counselors, 7)); //["Alysa"]
