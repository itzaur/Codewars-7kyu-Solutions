/*
Description:

Let's build a calculator.

This is very basic Javascript kata.

The test expects you to provide a Calculator object with the following methods:

Calculator.add()
Calculator.subtract()
Calculator.multiply()
Calculator.divide()

Each method expects two arguments, so for instance:

Calculator.add(1,4) should return 5.

Only integers are expected to be passed in as arguments, and the divide method should return 'false' when trying the divide by zero.
*/
class Calculations {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return b !== 0 ? a / b : false;
  }
}

const Calculator = new Calculations();
//////////////////////////////////////!SECTION
// var Calculator = {
//   add: (a, b) => a + b,
//   subtract: (a, b) => a - b,
//   multiply: (a, b) => a * b,
//   divide: (a, b) => (b ? a / b : false),
// };

console.log(Calculator.add(2, 4)); //6
console.log(Calculator.subtract(5, 3)); //2
console.log(Calculator.multiply(9, 2)); //18
console.log(Calculator.divide(12, 4)); //3
console.log(Calculator.divide(33, 0)); //false
