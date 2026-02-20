/*
Description:

Array.prototype.sort() is a pretty handy feature of the JS core, but when it comes to order an array of numbers, sometimes it can pollute our code.
Task

In this Kata you have to extend the Array object and add the sortReloaded(dir) method to it in order to make this task easier and cleaner.

It should receive a dir parameter which has with two possible values 'asc' or 'desc', and return a new array ordered ascendingly or descendingly respectively. If no dir parameter is set it should assume 'asc' by default. If it has an invalid value, return false.
Note

    For the effects of this Kata, all the arrays will contain only Integer numbers so you don't have to care about validating them.

    You have to return a new array, do not modify the original array.
*/
Array.prototype.sortReloaded = function (dir = 'asc') {
  if (dir !== 'asc' && dir !== 'desc') {
    return false;
  }

  const sortedArray = [...this].sort((a, b) => a - b);

  return dir === 'asc' ? sortedArray : sortedArray.reverse();
};

console.log(typeof Array.prototype.sortReloaded); //'function'
console.log([3, 1, 5, 3, 6, 1, 2].sortReloaded('asc')); //[1,1,2,3,3,5,6]
console.log([2, 3, 4, 3, 2, 9, 1].sortReloaded('desc')); //[9,4,3,3,2,2,1]
console.log([2, 3].sortReloaded('foo')); //false
console.log([4, 7, 2].sortReloaded()); //[2,4,7]
