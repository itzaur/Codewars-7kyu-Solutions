/*
DESCRIPTION:
Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid.
*/
const digits = (n) => (n + '').length;

console.log(digits(0)); //1
console.log(digits(9)); //1
console.log(digits(66)); //2
console.log(digits(12345)); //5
console.log(digits(128685)); //6
console.log(digits(9876543210)); //10
console.log(digits(9007199254740991)); //16
