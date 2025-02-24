/*
Description:
Write a function that returns the number of arguments it received.

args_count() --> 0
args_count('a') --> 1
args_count('a', 'b') --> 2
*/
const args_count = (...args) => args.length;

console.log(args_count(1, 2)); //2
console.log(args_count()); //0
console.log(args_count('A', 'B', 'C')); //3
console.log(args_count(['foo', 'bar'])); //1
