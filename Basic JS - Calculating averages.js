/*
Description:
Let's build a calculator that can calculate the average for an arbitrary number of arguments.

The test expects you to provide a Calculator object with an average method:

Calculator.average()
The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.

It expects Calculator.average(3,4,5) to return 4.
*/
var Calculator = {
  average: function (...args) {
    return args.reduce((acc, el) => acc + el, 0) / args.length || 0;
  },
};

console.log(Calculator.average(3, 4, 5)); //4
console.log(Calculator.average(3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3)); //5.769230769230769
console.log(Calculator.average()); //0
