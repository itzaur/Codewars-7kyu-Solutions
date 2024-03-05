/*
DESCRIPTION:
Write

function consecutiveOnes(nums) {}
that takes in array nums and returns the maximum consecutive 1's

For example

consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]) === 3
consecutiveOnes([1, 1, 0, 0, 1]) === 2
consecutiveOnes([0, 0, 0, 0, 0]) === 0
PLEASE NOTE THAT THIS KATA HAS HEAVY PERFORMANCE TESTS AND YOU NEED OPTIMIZED CODE TO PASS IT
*/
function consecutiveOnes(nums) {
  let count = 0,
    result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      result = Math.max(count, result);
      count = 0;
    }
  }

  return Math.max(count, result);

  //   return Math.max(...nums.join('').split('0').map(a => a.length));
}

console.log(consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0])); //3
console.log(consecutiveOnes([1, 1, 0, 0, 1])); //2
console.log(consecutiveOnes([1, 1, 1, 1, 1])); //5
console.log(consecutiveOnes([0, 0, 0, 0, 0])); //0
console.log(consecutiveOnes([0, 0, 0, 0, 1])); //1
