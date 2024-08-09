/*
Description:
Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

@ @@ @ @@ @ @@ @ @@ @ @@ @

Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
If there are less than 2 blue beads return 0.
*/
const countRedBeads = (n) => (n > 1 ? (n - 1) * 2 : 0);
//////////////////////////////!SECTION
// const countRedBeads = (n) => n && --n * 2;
//////////////////////////////!SECTION
// const countRedBeads = (n) => Math.max(0, 2 * (n - 1));

console.log(countRedBeads(0)); //0
console.log(countRedBeads(1)); //0
console.log(countRedBeads(3)); //4
console.log(countRedBeads(5)); //8
