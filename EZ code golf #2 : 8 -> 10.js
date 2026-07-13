/*
Description:

You have to write a function f which takes in an octal number in string format and output its decimal representation in less than 15 characters.
*/
f = (_) => +('0o' + _);
//////////////////////////////!SECTION
// f = (p) => +`0o${p}`;

console.log(f('2')); //2
console.log(f('31')); //25
console.log(f('1457')); //815
console.log(f('53275320260735355325703124536')); //104862069400837536141322590
