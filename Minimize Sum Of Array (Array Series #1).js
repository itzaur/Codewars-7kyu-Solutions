/*
DESCRIPTION:
Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22)
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74
*/
function minSum(arr) {
  return arr
    .sort((a, b) => a - b)
    .map((el, i, array) => el * array[array.length - i - 1])
    .slice(0, arr.length / 2)
    .reduce((acc, el) => acc + el, 0);

  //   return arr
  //     .sort((a, b) => a - b)
  //     .reduce((pre, val) => pre + val * arr.pop(), 0);
}

console.log(minSum([5, 4, 2, 3])); //22
console.log(minSum([12, 6, 10, 26, 3, 24])); //342
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6])); //74
console.log(
  minSum([
    116, 115, 175, 98, 175, 102, 103, 29, 148, 194, 54, 22, 92, 106, 58, 36,
    112, 66, 129, 74, 177, 98,
  ])
); //93283
