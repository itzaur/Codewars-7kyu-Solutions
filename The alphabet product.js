/*
Description:

I have four positive integers, A, B, C and D, where A < B < C < D. The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order. Your task is to return the value of D.
*/
function alphabet(ns) {
  const sortedArray = ns.sort((a, b) => a - b);
  const [A, B, C, ...rest] = sortedArray;

  return rest.at(-1) / sortedArray[A * B === C ? 3 : 2];
  ////////////////////////////////////////////////!SECTION
  // let [A, B, ...tail] = [...ns].sort((a, b) => a - b);
  // return tail.at(-1) / tail[+!tail.indexOf(A * B)];
}

console.log(alphabet([2, 3, 4, 1, 12, 6, 2, 4])); //4
console.log(alphabet([2, 6, 7, 3, 14, 35, 15, 5])); //7
console.log(alphabet([20, 10, 6, 5, 4, 3, 2, 12])); //5
console.log(alphabet([2, 6, 18, 3, 6, 7, 42, 14])); //7
console.log(alphabet([7, 96, 8, 240, 12, 140, 20, 56])); //20
console.log(alphabet([20, 30, 6, 7, 4, 42, 28, 5])); //7
