/*
DESCRIPTION:
An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right.
solve([5,4,3,2,1]) = [5,4,3,2,1]

Notice that the last element is always included. All numbers will be greater than 0.
More examples in the test cases.

Good luck!
*/
function solve(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr.slice(i + 1).filter((el) => el >= arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;

  //   return arr.filter((e, i) => arr.slice(i + 1).every((x) => x < e));

  //   return arr.filter((n, i) => n > Math.max(...arr.slice(i + 1)));
}

// console.log(solve([1, 21, 4, 7, 5]));
console.log(solve([16, 17, 14, 3, 14, 5, 2])); //[17,14,5,2]
// console.log(solve([75, 47, 42, 56, 13, 55])); //[75,56,55]
