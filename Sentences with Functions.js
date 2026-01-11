/*
Description:

Implement all required functions in order to create the following sentences by calling those functions:

Adam(has(a(dog()))); // must return "Adam has a dog."
The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."
*/
const Adam = (str = '.') => 'Adam' + str;
const has = (str = '.') => ' has ' + str;
const a = (str = '.') => 'a ' + str;
const dog = (str = '.') => 'dog' + str;
const The = (str = '.') => 'The ' + str;
const name = (str = '.') => 'name ' + str;
const of = (str = '.') => 'of ' + str;
const the = (str = '.') => 'the ' + str;
const is = (str = '.') => ' is ' + str;
const also = (str = '.') => 'also ' + str;
////////////////////////////////////////////!SECTION
// [`Adam`, `has`, `a`, `dog`, `The`, `name`, `of`, `the`, `is`, `also`].map(
//   (val) => (global[val] = (arg) => (arg ? `${val} ${arg}` : `${val}.`))
// );
////////////////////////////////////////////!SECTION
// _fn = function(name, str) {
//     return name + (str ? ' ' + str : '.');
// }

// 'Adam has a The name of the dog is also'.split(' ').forEach(function(name) {
//     this[name] = _fn.bind(null, name);
// })

console.log(Adam(has(a(dog())))); //'Adam has a dog.'
console.log(The(name(of(the(dog(is(also(Adam())))))))); //'The name of the dog is also Adam.'
