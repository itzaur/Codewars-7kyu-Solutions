/*
Description:

Create a function to return true type of variable, i.e.

type([]) == 'array'
type({}) == 'object'
type('') == 'string'
type(NaN) == 'number'
*/
function type(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

console.log(type([])); //'array'
console.log(type({})); //'object'
console.log(type('')); //'string'
console.log(type([].join())); //'string'
console.log(type(new Date())); //'date'
