/*
Description:
Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

Example:

solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
*/
function solution(pairs) {
  return JSON.stringify(pairs)
    .replace(/[:]/g, ' = ')
    .replace(/[""]/g, '')
    .split(/[{}]/)
    .filter((el) => el).join``;
  //////////////////////////////////////!SECTION
  //   return Object.entries(pairs)
  //     .map(([key, value]) => `${key} = ${value}`)
  //     .join(',');
  //////////////////////////////////////!SECTION
  //   return Object.keys(pairs)
  //     .map((k) => `${k} = ${pairs[k]}`)
  //     .join(',');
  //////////////////////////////////////!SECTION
  //   return `${Object.entries(pairs).map(([key, val]) => `${key} = ${val}`)}`;
}

console.log(solution({ a: 1, b: 2 })); //'a = 1,b = 2'
console.log(solution({ a: 'b', b: 'a' })); //'a = b,b = a'
console.log(solution({ 0: 'a', b: 2 })); //'0 = a,b = 2'
console.log(solution({ b: 1, c: 2, e: 3 })); //'b = 1,c = 2,e = 3'
console.log(solution({})); //''
