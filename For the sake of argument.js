/*
Description:
Write a function named numbers.

function should return True if all parameters are of the Number type.

The function should accept any number of parameters.

Example usage:

numbers(1, 4, 3, 2, 5); // true
numbers(1, "a", 3); // false
numbers(1, 3, NaN); // true
*/
const numbers = (...args) => args.every((el) => typeof el === 'number');

console.log(numbers(1, 12, 3, 100)); //true
console.log(numbers('1', '2', '3', '4')); //false
console.log(numbers(1)); //true
console.log(numbers(1, '2', [3, 4], 'a')); //false
console.log(numbers((1, NaN, 3))); //true
console.log(numbers(null)); //false
