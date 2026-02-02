/*
Description:
Shorten Me: Mad Mathematician's Algorithm V (Modulus)
Task

You have to write a madMod(a,b) function returning a value of a % b without % in your code.
Coding Limitation:

    Less than 35 characters

Input:

    a and b : integer ( 0-10000 )
*/
madMod = (a, b) => a - b * Math.floor(a / b);
//////////////////////////////////!SECTION
// madMod=(a,b)=>a-parseInt(a/b)*b

console.log(madMod(0, 0)); //NaN
console.log(madMod(0, 1)); //0
console.log(madMod(1, 2)); //1
console.log(madMod(3, 3)); //0
console.log(madMod(10, 7)); //3
