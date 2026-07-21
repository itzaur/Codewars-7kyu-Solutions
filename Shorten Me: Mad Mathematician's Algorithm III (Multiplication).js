/*
Description:
Shorten Me: Mad Mathematician's Algorithm III (Multiplication)
Task

You have to write a madMul(a,b) function returning a value of a * b without * in your code.
Coding Limitation:

    Less than 30 characters

Input:

    a and b : integer ( 0-10000 )

Note: Avoid using Math.imul()
*/
madMul = f = (a, b) => a && b + f(a--, b);
////////////////////////!SECTION
// madMul=(a,b)=>~~(a/(1/b)+.5)
////////////////////////!SECTION
// madMul=(a,b)=>.1+a/(1/b)|0

console.log(madMul(4, 3)); //12
