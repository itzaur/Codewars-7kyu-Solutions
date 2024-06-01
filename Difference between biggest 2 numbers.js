/*
DESCRIPTION:
You have an array of non-negative integers. You need to calculate the difference between the 1st biggest number and the 2nd biggest number of the array.

    diffBig2([10, 5, 2]);
In this case, the 1st biggest number is 10 and the 2nd biggest number is 5. So, the function returns 5, the result of 10 - 5.

You can assume that the input array has 2 or more elements.

The input array has the sort method disabled, so you will have to solve it in another way.
*/
function diffBig2(arr) {
  const maxNumber1 = Math.max(...arr);
  const maxNumberArr = arr.filter((el) => el == maxNumber1);
  const maxNumber2 = Math.max(...arr.filter((el) => el !== maxNumber1));

  return maxNumberArr.length > 1 ? 0 : maxNumber1 - maxNumber2;
  //////////////////////////!SECTION
  //   let max = Math.max(...arr);
  //   arr.splice(arr.indexOf(max), 1);
  //   return max - Math.max(...arr);
}

console.log(diffBig2([2, 1])); //1
console.log(diffBig2([8, 3, 1])); //5
console.log(diffBig2([1, 8, 3])); //5
console.log(diffBig2([100, 100])); //0
console.log(diffBig2([1, 2, 10, 3, 4, 5, 6, 7, 8, 9, 10])); //5
