/*
DESCRIPTION:
Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:

[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
Points:

The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
Inspired by https://adriann.github.io/programming_problems.html
*/
function mergeArrays(a, b) {
  return [...Array(a.length + b.length)]
    .reduce((acc, el, i) => {
      return [...acc, a[i], b[i]];
    }, [])
    .filter((el) => el !== undefined);
  ////////////////////////!SECTION
  //   let count = 1;
  //   while (b.length) {
  //     a.splice(count, 0, b.shift());
  //     count += 2;
  //   }
  //   return a;
  ////////////////////////!SECTION
  //   const res = [];
  //   for (let i = 0; i < Math.max(a.length, b.length); i++) {
  //     if (i in a) res.push(a[i]);
  //     if (i in b) res.push(b[i]);
  //   }
  //   return res;
  ////////////////////////!SECTION
  // const res = [];
  // while (a.length || b.length) {
  //   if (a.length) res.push(a.shift());
  //   if (b.length) res.push(b.shift());
  // }
  // return res;
  ////////////////////////!SECTION
  //   return a.reduce((acc, el) => {
  //     return b.length ? [...acc, el, b.shift()] : [...acc, el];
  //   }, []);
  // .concat(b);
  ////////////////////////!SECTION
  //   for (let i = 0; i < a.length; i++) {
  //     b.splice(i * 2, 0, a[i]);
  //   }

  //   return b;
  ////////////////////////!SECTION
  //   return a.length ? [a[0], ...mergeArrays(b, a.slice(1))] : b;
}

// const mergeArrays = ([a, ...b], x = []) =>
//   a === undefined ? x : [a, ...mergeArrays(x, b)];

console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e'])); //[1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]
console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5])); //['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]
console.log(mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's'])); //[2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']
console.log(
  mergeArrays(
    ['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'],
    [2, 5, 8, 23, 67, 6]
  )
); //['b', 2, 'r', 5, 'a', 8, 'u', 23, 'r', 67, 's', 6, 'e', 'q', 'z']
