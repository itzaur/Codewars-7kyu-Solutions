/*
Description:
For this task you will be given an array of numbers, each number in turn has to be cubed and once all numbers have been cubed all of them have to be added to get a final sum.

If the final sum is less than or equal to the maximum value allowed for an Integer return the sum otherwise return "You've pushed me to the max!".

You can assume that you will receive a valid array of numbers.
*/
function maxedOut(arr) {
  const MAX_VALUE = Number.MAX_SAFE_INTEGER;
  const result = arr.reduce((acc, el) => acc + el ** 3, 0);

  return result <= MAX_VALUE ? result : "You've pushed me to the max!";
}
////////////////////////////////////////!SECTION
// const maxedOut = (arr) =>
//   ((val) =>
//     val > Number.MAX_SAFE_INTEGER ? `You've pushed me to the max!` : val)(
//     arr.reduce((pre, val) => pre + val ** 3, 0)
//   );

console.log(maxedOut([1, 2])); //9
console.log(maxedOut([-530, 230, 5600, 40, 5, 7200])); //548727354125
console.log(maxedOut([7600, 32300, 66700, 22200, 4554, 323000, 5555])); //"You've pushed me to the max!"
