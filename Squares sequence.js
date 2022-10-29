/*
Description:

Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.
Examples

2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]
*/

function squares(x, n) {
  if (n <= 0) return [];
  const array = [...Array(n).keys()].fill(x);
  let result = [];

  for (let i = 0; i < n - 1; i++) {
    array[i + 1] = array[i] ** 2;
    result.push(array[i] ** 2);
  }

  result.unshift(x);

  return result;
  ///////////////////////////////
  // let arr = [];
  // for (let i = 0; i < n; i++) {
  //   arr.push(x);
  //   x *= x
  // }
  // return arr;
  ////////////////////////////////
  // if (n <= 0) return [];
  // return [...Array(n).keys()].map((_, i) => x ** 2 ** i)
  ///////////////////////////////
  // if (n <= 0) return [];
  // return [...Array(n).keys()]
  //   .fill(x)
  //   .map((el, i) => Math.pow(el, Math.pow(2, i)));
  ///////////////////////////////
  // if (n <= 0) return [];
  // return new Array(n - 1).fill(x).reduce((acc, _) => {
  //   return [...acc, acc[acc.length - 1] ** 2]
  // }, [x])
  ///////////////////////////////
  // if (n <= 0) return [];
  // return [...Array(n - 1).keys()].fill(x).reduce(
  //   (acc) => {
  //     return [...acc, acc[acc.length - 1] ** 2];
  //   },
  //   [x]
  // );
}

console.log(2 ** (5 ** 0)); //2 === 2 ** (5 ** 0)

console.log(squares(2, 5)); //[2, 4, 16, 256, 65536]
console.log(squares(3, 3)); //[3, 9, 81]
console.log(squares(5, 3)); //[5, 25, 625]
console.log(squares(10, 4)); //[10, 100, 10000, 100000000]
console.log(squares(2, 0)); //[]
console.log(squares(2, -5)); //[]
console.log(squares(0, 0));
console.log(squares(1, 5));
