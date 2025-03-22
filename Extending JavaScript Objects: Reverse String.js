/*
Description:

Unfortunately, there's no a .reverse() method for the JavaScript String object.

Your task is to extend JavaScript String object, so you can reverse strings just like this:

'Hello, World!'.reverse();

The method should return:

'!dlroW ,olleH'
*/
String.prototype.reverse = function () {
  return [...this].reduceRight((acc, el) => acc + el, '');
};

console.log('Hello, World!'.reverse()); //'!dlroW ,olleH'
