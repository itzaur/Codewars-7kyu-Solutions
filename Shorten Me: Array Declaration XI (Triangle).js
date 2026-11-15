/*
Description:
Shorten Me: Array Declaration XI (Triangle)
Task

You have to write an array() function returning an array object with elements as follow:

[
    [9,8,7,6,5,4,3,2,1,0],
    [8,7,6,5,4,3,2,1,0],
    [7,6,5,4,3,2,1,0],
    [6,5,4,3,2,1,0],
    [5,4,3,2,1,0],
    [4,3,2,1,0],
    [3,2,1,0],
    [2,1,0],
    [1,0],
    [0]
]

Coding Limitation:

Less than 70 characters
*/
array = (n = 10) =>
  n ? [[...Array(n)].map((_, i) => n - 1 - i), ...array(n - 1)] : [];
//////////////////////////////////!SECTION
// array=(a=[9,8,7,6,5,4,3,2,1,0])=>a.map((e,i)=>a.slice(i))

console.log(array()); //[[9,8,7,6,5,4,3,2,1,0],[8,7,6,5,4,3,2,1,0],[7,6,5,4,3,2,1,0],[6,5,4,3,2,1,0],[5,4,3,2,1,0],[4,3,2,1,0],[3,2,1,0],[2,1,0],[1,0],[0]]
