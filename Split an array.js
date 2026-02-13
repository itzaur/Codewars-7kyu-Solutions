/*
Description:

Split an array of objects into 2 arrays based on truthiness of a provided property. The return value should be an array whose first element is an array of the truthy values, and whose second element is an array of the falsey values.

Javascript example:

var obj1 = { prop: true },
    obj2 = { prop: false };
split([obj1, obj2], 'prop');
// [[obj1], [obj2]]

CoffeeScript example:

obj1 = { prop: true }
obj2 = { prop: false }

split [obj1, obj2], 'prop'
# [[obj1], [obj2]]
*/
function split(arr, prop) {
  return arr.reduce(
    (acc, obj) => {
      return (acc[obj[prop] ? 0 : 1].push(obj), acc);
    },
    [[], []],
  );
}
////////////////////////////////////////!SECTION
// const split = (array, prop) => [
//   array.filter((item) => item[prop]),
//   array.filter((item) => !item[prop]),
// ];

var obj1 = { prop: true },
  obj2 = { prop: false };

var values = split([obj1, obj2], 'prop');

console.log(values[0].length); //1
console.log(values[1].length); //1
console.log(values[0][0]); //obj1
console.log(values[1][0]); //obj2
