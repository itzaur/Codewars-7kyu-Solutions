/*
Description:
Write a function last that accepts a list and returns the last element in the list.

If the list is empty:

In languages that have a built-in option or result type (like OCaml or Haskell), return an empty option

In languages that do not have an empty option, just return null
*/
const last = (xs) => (xs.length ? xs.slice(-1)[0] : null);

console.log(last([1, 2, 3])); //3
console.log(last([])); //null
