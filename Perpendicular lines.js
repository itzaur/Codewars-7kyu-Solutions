/*
Description:

You are given an input (n) which represents the amount of lines you are given, your job is to figure out what is the maximum amount of perpendicular lines you can make using these lines.

Note: A perpendicular line is one that forms a 90 degree angle

n will always be greater than or equal to 0

Examples with 3 and 4 lines
*/
function maxBisectors(n) {
  return ~~(n / 2) * Math.ceil(n / 2);
}
//////////////////////////////////////!SECTION
// const maxBisectors = (n) => (n ** 2 / 4) | 0;
//////////////////////////////////////!SECTION
// const maxBisectors = (n) => Math.floor(n ** 2 / 4);

console.log(maxBisectors(5)); //6
console.log(maxBisectors(6)); //9
console.log(maxBisectors(51)); //650
