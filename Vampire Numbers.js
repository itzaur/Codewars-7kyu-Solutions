/*
DESCRIPTION:
Vampire Numbers
Our loose definition of Vampire Numbers can be described as follows:

6 * 21 = 126
# 6 and 21 would be valid 'fangs' for a vampire number as the
# digits 6, 1, and 2 are present in both the product and multiplicands

10 * 11 = 110
# 110 is not a vampire number since there are three 1's in the
# multiplicands, but only two 1's in the product
Create a function that can receive two 'fangs' and determine if the product of the two is a valid vampire number.
*/
function vampireTest(a, b) {
  return [...`${a}${b}`]
    .sort()
    .every((el, i) => el == [...`${a * b}`.split``].sort()[i]);
  //////////////////////////////!SECTION
  // return [...(`` + a + b)].sort().join(``) === [...`${a * b}`].sort().join(``);
}

console.log(vampireTest(21, 6)); //true
console.log(vampireTest(204, 615)); //true
console.log(vampireTest(30, -51)); //true
console.log(vampireTest(-246, -510)); //false
console.log(vampireTest(2947050, 8469153)); //true
console.log(vampireTest(2947051, 8469153)); //false
console.log(vampireTest(-7191, 4920)); //false
console.log(vampireTest(0, 0)); //false
console.log(vampireTest(10, 1)); //false
