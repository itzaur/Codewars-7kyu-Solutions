/*
Description:

Write a function that takes in a string and an object/hash/dict/Dictionary.

The keys of the dictionary indicate which characters to remove, and the value associated to a key specifies how many instances of this character to remove, in order of appearance in the string from left to right.

Return the filtered string.
Examples

// remove from 'this is a string' the first 1 't' and the first 2 i's.
"this is a string", {'t':1, 'i':2} ==> "hs s a string"


// there are no x's or i's, so nothing gets removed
"hello world", {'x':5, 'i':2} ==> "hello world"

// we don't have 50 a's, so just remove it till we hit end of string.
"apples and bananas", {'a':50, 'n':1} ==> "pples d bnns"
*/
function remove(str, what) {
  return str.split``.filter((el) => {
    if (what[el]) {
      what[el]--;

      return false;
    }

    return true;
  }).join``;
  ////////////////////////////!SECTION
  //   return str.replace(/[a-z]/g, (c) => (what[c]-- > 0 ? '' : c));
}

console.log(remove('this is a string', { t: 1, i: 2 })); //'hs s a string'
console.log(remove('hello world', { x: 5, i: 2 })); //'hello world'
console.log(remove('apples and bananas', { a: 50, n: 1 })); //'pples d bnns'
console.log(remove('a', { a: 1, n: 1 })); //''
console.log(
  remove('codewars', { c: 5, o: 1, d: 1, e: 1, w: 1, z: 1, a: 1, r: 1, s: 1 }),
); //''
