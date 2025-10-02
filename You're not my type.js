/*
Description:

Write

Array.prototype.ofType = function(type){}

that will filter an array based on a supplied type.

For example:

var arr = [{ a: 'a' }, /a-z/, [1, 2, 3], i=>i];
arr.ofType(Object) === [{ a: 'a' }, /a-z/, [1, 2, 3], i=>i];
arr.ofType(RegExp) === [/a-z/];
arr.ofType(Array) === [[1, 2, 3]];
*/
Object.defineProperty(Array.prototype, 'ofType', {
  value: function (type) {
    return this.filter(
      (el) =>
        el !== null &&
        (el instanceof type || typeof el === type.name.toLowerCase())
    );
  },
});

var arr = [{ a: 'a' }, /a-z/, [1, 2, 3]];

console.log(arr.ofType(Object)); //[{ a: 'a' }, /a-z/, [1, 2, 3], func]
console.log(arr.ofType(RegExp)); //[/a-z/]
console.log(arr.ofType(Array)); //[[1, 2, 3]]
console.log(arr.ofType(Function)); //[func]
