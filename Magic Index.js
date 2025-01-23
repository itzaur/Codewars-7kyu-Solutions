/*
Description:
A magic index in an array A[1...n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.

findMagic([-20,-10,2,10,20]); // Returns 2
*/
function findMagic(arr) {
  return arr.find((el, i) => el === i) || -1;
  ////////////////////////////!SECTION
  //   return arr.findIndex((i) => arr[i] === i);
}

var results1 = findMagic([-20, -10, 2, 10, 20]);
console.log(results1); //2
var results2 = findMagic([6, 5, 83, 5, 3, 18]);
console.log(results2); //-1
