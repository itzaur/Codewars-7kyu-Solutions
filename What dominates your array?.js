/*
Description:
A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.
*/
function dominator(arr) {
  const obj = {};
  arr.map((val) => (obj[val] = (obj[val] || 0) + 1));

  const [key, value] = Object.entries(obj).sort((a, b) => b[1] - a[1])[0];

  return value > arr.length / 2 ? +key : -1;
  //////////////////////////////////!SECTION PERFORMANCE TASK
  //   const counts = {};

  //   return (
  //     arr.find(
  //       (value) => (counts[value] = counts[value] + 1 || 1) > arr.length / 2
  //     ) || -1
  //   );
}

console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3])); //3
console.log(dominator([1, 2, 3, 4, 5])); //-1
console.log(dominator([1, 1, 1, 2, 2, 2])); //-1
console.log(dominator([1, 1, 1, 2, 2, 2, 2])); //2
