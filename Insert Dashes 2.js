/*
Description:

This is a follow up from my kata Insert Dashes.

Write a function that takes a non-negative integer, insert dashes ('-') between each two odd digits and insert asterisks ('*') between each two nonzero even digits.

For example:

454793 --> "4547-9-3"
1012356895 --> "10123-56*89-5"

Note: Digit zero ('0') is not considered when inserting dashes or asterisks.
*/
function insertDashII(num) {
  return `${num}`
    .replace(/([13579])(?=[13579])/g, '$1-')
    .replace(/([2468])(?=[2468])/g, '$1*');
}

console.log(insertDashII(454793)); //'4547-9-3'
console.log(insertDashII(123456)); //'123456'
console.log(insertDashII(40546793)); //'4054*67-9-3'
console.log(insertDashII(1012356895)); //'10123-56*89-5'
