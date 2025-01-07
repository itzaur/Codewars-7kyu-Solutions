/*
Description:
An array is defined to be inertialif the following conditions hold:

a. it contains at least one odd value
b. the maximum value in the array is even
c. every odd value is greater than every even value that is not the maximum value.
eg:-

So [11, 4, 20, 9, 2, 8] is inertial because
a. it contains at least one odd value [11,9]
b. the maximum value in the array is 20 which is even
c. the two odd values (11 and 9) are greater than all the even values that are not equal to 20 (the maximum), i.e., [4, 2, 8]
Write a function called is_inertial that accepts an integer array and returns true if the array is inertial; otherwise it returns false.
*/
function isInertial(arr) {
  const oddArr = arr.filter((el) => el % 2);
  const evenArr = arr.filter((el) => !(el % 2)).sort((a, b) => b - a);
  const condition1 = oddArr.length > 0;
  const condition2 = !(Math.max(...arr) % 2);
  const condition3 = oddArr.every(
    (el) => el > Math.max(...[...new Set(evenArr)].slice(1))
  );

  return condition1 && condition2 && condition3;
}

console.log(isInertial([-360, 249, -44, -515, 46, 446, -358, -409, 363, 97])); //false
console.log(isInertial([11, 4, 20, 9, 2, 8, 20])); //true
console.log(isInertial([474, -9])); //true
