/*
Description:
Create a function that lets people easily grab only the array elements with given keys.

For example:

var array = ['a', 'b', 'c', 'd', 'e'];
array2 = array.only([0, 3]);
// at this point array2 should be ['a', 'd']
Note: The order of the elements should be preserved in the resulting array.
*/
Array.prototype.only = function (keys) {
  return this.filter((_, i) => keys.includes(i));
  //////////////////////////////////////////!SECTION
  //   indices = new Set(indices);
  //   return this.filter((v, i) => indices.has(i));
  //////////////////////////////////////////!SECTION
  //   return keys.sort((a, b) => a - b).map((x) => this[x]);
};

var array = ['a', 'b', 'c', 'd', 'e'];

console.log(array.only([0, 3])); //['a', 'd']
console.log(array.only([1])); //['b']
console.log(array.only([0, 1, 3, 4])); //['a', 'b', 'd', 'e']

var array = ['a', 'b', 'c', 'a', 'b'];

console.log(array.only([0, 1, 3])); //['a', 'b', 'a']
console.log(array.only([1, 2, 3, 4])); //['b','c','a','b']
