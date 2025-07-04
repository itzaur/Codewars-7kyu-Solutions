/*
Description:
Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task

Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
Notes

    Array/list size is at least 2 .

    Array/list's numbers Will be only Positives

    Repetition of numbers in the array/list could occur.

Input >> Output Examples

productArray ({12,20}) ==>  return {20,12}

Explanation:

    The first element in prod [] array 20 is the product of all array's elements except the first element

    The second element 12 is the product of all array's elements except the second element .

productArray ({1,5,2}) ==> return {10,2,5}

Explanation:

    The first element 10 is the product of all array's elements except the first element 1

    The second element 2 is the product of all array's elements except the second element 5

    The Third element 5 is the product of all array's elements except the Third element 2.

productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}

Explanation:

    The first element 180 is the product of all array's elements except the first element 10

    The second element 600 is the product of all array's elements except the second element 3

    The Third element 360 is the product of all array's elements except the third element 5

    The Fourth element 300 is the product of all array's elements except the fourth element 6

    Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2

*/
function productArray(numbers) {
  return numbers.map((_, i) => {
    return numbers.reduce((acc, el, j) => {
      return j !== i ? acc * el : acc;
    }, 1);
  });
  ////////////////////////////////////////!SECTION
  //   return numbers.map((x) => numbers.reduce((a, b) => a * b) / x);
}

console.log(productArray([12, 20])); //[20, 12]
console.log(productArray([3, 27, 4, 2])); //[216, 24, 162, 324]
console.log(productArray([13, 10, 5, 2, 9])); //[900, 1170, 2340, 5850, 1300]
console.log(productArray([16, 17, 4, 3, 5, 2])); //[2040, 1920, 8160, 10880, 6528, 16320]
