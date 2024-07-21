/*
DESCRIPTION:
Task
Let's define a parameter of number n as the least common multiple (LCM) of the sum of its digits and their product.

Calculate the parameter of the given number n.

Input/Output
[input] integer n

A positive integer. It is guaranteed that no zero appears in n.

[output] an integer

The parameter of the given number.

Example
For n = 22, the output should be 4.

Both the sum and the product of digits equal 4, and LCM(4, 4) = 4.

For n = 1234, the output should be 120.

1+2+3+4=10 and 1*2*3*4=24, LCM(10,24)=120
*/
function parameter(n) {
  const sum = [...`${n}`].reduce((acc, el) => acc + +el, 0);
  const multiple = [...`${n}`].reduce((acc, el) => acc * el);

  const greatestCommonDivisor = (a, b) =>
    !b ? a : greatestCommonDivisor(b, a % b);

  return (sum * multiple) / greatestCommonDivisor(sum, multiple);
}

console.log(parameter(22)); //4
console.log(parameter(1234)); //120
console.log(parameter(123)); //6
console.log(parameter(11)); //2
console.log(parameter(239)); //378
console.log(parameter(999999999)); //387420489
console.log(parameter(91)); //90
console.log(parameter(344)); //528
console.log(parameter(123456789)); //362880
