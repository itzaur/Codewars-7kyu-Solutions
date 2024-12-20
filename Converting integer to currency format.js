/*
Description:
Write a function that takes an integer in input and outputs a string with currency format.

Integer in currency format is expressed by a string of number where every three characters are separated by comma.

For example:

123456 --> "123,456"
Input will always be an positive integer, so don't worry about type checking or negative/float values.
*/
const toCurrency = (price) => price.toLocaleString();

price1 = 123456;
price2 = 1234;
price3 = 123;
price4 = 123456789012;
console.log(toCurrency(price1)); //"123,456"
console.log(toCurrency(price2)); //"1,234"
console.log(toCurrency(price3)); //"123"
console.log(toCurrency(price4)); //"123,456,789,012"
