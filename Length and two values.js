/*
Description:
Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
*/
function alternate(n, firstValue, secondValue) {
  return Array.from({ length: n }, (_, i) => i + 1)
    .fill([firstValue, secondValue])
    .flat()
    .slice(0, n);
  ////////////////////////////////////!SECTION
  //   return Array.from({ length: n }, (_, i) =>
  //     i % 2 === 0 ? firstValue : secondValue
  //   );
  ////////////////////////////////////!SECTION
  //   return n ? [firstValue, ...alternate(n - 1, secondValue, firstValue)] : [];
  ////////////////////////////////////!SECTION
  //   return Array.from({ length: n }, (_, i) => [firstValue, secondValue][i % 2]);
}

console.log(alternate(5, true, false)); //[true, false, true, false, true]
console.log(alternate(20, 'blue', 'red')); //['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red']
console.log(alternate(0, 'lemons', 'apples')); //[]
