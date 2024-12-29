/*
Description:
An array is called zero-balanced if its elements sum to 0 and for each positive element n, there exists another element that is the negative of n. Write a function named ìsZeroBalanced that returns true if its argument is zero-balanced array, else return false. Note that an empty array will not sum to zero.
*/
function ìsZeroBalanced(n) {
  const reducer = (arr) => arr.reduce((acc, el) => acc + el, 0);
  const plus = n.filter((el) => el > 0).sort();
  const minus = n.filter((el) => el < 0).sort();

  return (
    n.length > 0 &&
    minus.every((el, i) => el * -1 === plus[i]) &&
    reducer(plus) + reducer(minus) === 0
  );
}

console.log(ìsZeroBalanced([3])); //false
console.log(ìsZeroBalanced([0, 0, 0, 0, 0, 0])); //true
console.log(ìsZeroBalanced([2, 8, 10, -10, -10])); //false
console.log(ìsZeroBalanced([3, 7, -2, -8])); //false
console.log(ìsZeroBalanced([])); //false
console.log(ìsZeroBalanced([-3, 2, 1, 3, -1, -2])); //true
