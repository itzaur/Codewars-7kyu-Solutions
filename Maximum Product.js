/*
Description:
Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.

Examples
[1, 2, 3] returns 6 because the maximum product is obtained from multiplying 
 
2
∗
3
=
6
 2∗3=6
[9, 5, 10, 2, 24, -1, -48] returns 50 because the maximum product is obtained from multiplying 
 
5
∗
10
=
50
 5∗10=50
[-23, 4, -5, 99, -27, 329, -2, 7, -921] returns -14 because the maximum product is obtained from multiplying

−
2
∗
7
=
−
14
 −2∗7=−14
*/
function adjacentElementsProduct(array) {
  const result = [];

  for (let i = 1; i < array.length; i++) {
    result.push([array[i - 1], array[i]]);
  }

  return Math.max(...result.map((el) => el.reduce((acc, el) => acc * el)));
  //////////////////////////////////////////////!SECTION
  //   return Math.max(...array.map((el, i) => el * array[i + 1]).slice(0, -1));
  //////////////////////////////////////////////!SECTION
  //   return array
  //     .slice(1)
  //     .reduce((max, cur, i) => Math.max(array[i] * cur, max), -Infinity);
  //////////////////////////////////////////////!SECTION
  //   return Math.max(...array.slice(1).map((val, idx) => val * array[idx]));
}

console.log(adjacentElementsProduct([5, 8])); //40
console.log(adjacentElementsProduct([1, 2, 3])); //6
console.log(adjacentElementsProduct([1, 5, 10, 9])); //90
console.log(adjacentElementsProduct([4, 12, 3, 1, 5])); //48
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4])); //6
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); //21
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])); //50
console.log(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23])); //30
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])); //-14
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4])); //6
console.log(adjacentElementsProduct([1, 0, 1, 0, 1000])); //0
console.log(adjacentElementsProduct([1, 2, 3, 0])); //6
