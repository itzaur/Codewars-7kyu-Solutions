/*
Description:
Array Mappings
Oh no, the map method for arrays has been disabled. Can you fix it?

In case you haven't come across the map method for arrays, here is how it works:

[1,2,3].map(x => x ** 2) === [1,4,9]
[1,2,3].map(x => 2 * x) === [2,4,6]
[1,2,3].map(x => 2 ** x) === [2,4,8]
[1,2,3].map(x => x.toString()) === ["1","2","3"]
["1","2","3"].map(x => parseInt(x)) === [1,2,3]
["random","array","to","be","mapped"].map(x => mapping(x)) === [mapping("random"),mapping("array"),mapping("to"),mapping("be"),mapping("mapped")]
The map method does not mutate the original array.
*/
Array.prototype.map = function (fn) {
  const result = [];

  this.forEach((el) => result.push(fn(el)));

  return result;
  //////////////////////////////////////!SECTION
  //   return this.reduce((array, item) => array.concat(mapper(item)), []);
  //////////////////////////////////////!SECTION
  //   return this.reduce((pre, val) => [...pre, arguments[0](val)], []);
};

console.log([1, 2, 3].map((x) => x ** 2)); //[1,4,9]
console.log([1, 2, 3].map((x) => 2 * x)); //[2,4,6]
console.log([1, 2, 3].map((x) => 2 ** x)); //[2,4,8]
console.log([1, 2, 3].map((x) => x.toString())); //["1","2","3"]
console.log(['1', '2', '3'].map((x) => parseInt(x))); //[1,2,3]
