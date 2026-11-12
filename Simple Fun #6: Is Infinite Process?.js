/*
Description:
Task

Given integers a and b, determine whether the following pseudocode results in an infinite loop

 while (a !== b){
     a++
     b--
 }

Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.
Example

For a = 2 and b = 6, the output should be

isInfiniteProcess(a, b) = false (or equivalent in PHP)

For a = 2 and b = 3, the output should be

isInfiniteProcess(a, b) = true (or equivalent in PHP)
Input/Output

    [input] integer a

Constraints: 0 ≤ a ≤ 100.

    [input] integer b

Constraints: 0 ≤ b ≤ 100.

    [output] a boolean value

true if the pseudocode will never stop, false otherwise.
*/
function isInfiniteProcess(a, b) {
  return a > b || (b - a) % 2 !== 0;
  ////////////////////////////!SECTION
  //   return a > b || (a & 1) !== (b & 1);
}

console.log(isInfiniteProcess(2, 6)); //false
console.log(isInfiniteProcess(2, 3)); //true
console.log(isInfiniteProcess(2, 10)); //false
console.log(isInfiniteProcess(0, 1)); //true
console.log(isInfiniteProcess(3, 1)); //true
console.log(isInfiniteProcess(10, 10)); //false
console.log(isInfiniteProcess(5, 10)); //true
