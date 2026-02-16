/*
Description:
Shorten Me: Mad Mathematician's Algorithm I (Addition)
Task

You have to write a madAdd(a,b) function returning a value of a + b without + in your code.
Coding Limitation:

    Less than 30 characters

Input:

    a and b : integer ( 0-10000 )
*/
madAdd = (a, b) => a - -b;
//////////////////////////!SECTION
// madAdd = (a, b) => ~(~a - b);

console.log(madAdd(0, 0)); //0
console.log(madAdd(1, 2)); //3
console.log(madAdd(4, 5)); //9
