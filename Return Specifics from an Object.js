/*
Description:

Create a function that returns the values of an object which are numbers, and the keys of objects which have methods as values.

    array should return numbers first then all the method names in the order they are in the object
    strings, booleans, arrays should be ignored.
    if the object is empty, then the array should return the following string: The Object is Empty

Example:

returnSpecifics({a:1,b:'str',c:2,d:true,e:function(a){return a;},f:3})

This would return [1,2,3,'e']
*/
function returnSpecifics(obj) {
  return Object.keys(obj).length === 0
    ? ['The Object is Empty']
    : [
        ...Object.values(obj).filter((el) => typeof el === 'number'),
        ...Object.entries(obj)
          .filter(([_, value]) => typeof value === 'function')
          .map(([key, _]) => key),
      ];
}
////////////////////////////////////////////////////!SECTION
// const returnSpecifics = (obj) =>
//   ((arr) => (arr.length ? arr : [`The Object is Empty`]))([
//     ...Object.values(obj).filter((val) => typeof val === `number`),
//     ...Object.keys(obj).filter((val) => typeof obj[val] === `function`),
//   ]);

console.log(
  returnSpecifics({
    a: 1,
    b: 2,
    c: 3,
    d: 'd',
    e: 'dsds',
    add: function (a, b) {
      return a + b;
    },
    g: 34,
  }),
); //[1,2,3,34,'add']
console.log(
  returnSpecifics({
    a: 10,
    b: -20,
    c: true,
    d: 'd',
    e: 50,
    subtract: function (a, b) {
      return a - b;
    },
    g: 100,
  }),
); //[10,-20,50,100,'subtract']
console.log(
  returnSpecifics({
    a: 44456,
    b: 999,
    c: true,
    d: 'd',
    e: 5094430,
    arr: [1, 2, 3],
    g: 1980700,
  }),
); //[44456,999,5094430,1980700]
console.log(
  returnSpecifics({
    add: function (a, b) {
      return a + b;
    },
    b: [3, 5, 6],
    c: true,
    d: 'd',
    double: function (a) {
      return a * a;
    },
    subtract: function (a, b) {
      return a - b;
    },
    g: false,
  }),
); //['add','double','subtract']
console.log(returnSpecifics({})); //["The Object is Empty"]
