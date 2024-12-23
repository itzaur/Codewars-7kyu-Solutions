/*
Description:
A colleague asked if you can help him fix his function. It seems it doesn't always parse Integers correctly.

Examples:

parseNumbers(['10']) // should return [10]
parseNumbers(['-1','0','1']) // should return [-1,0,1]
*/
const parseNumbers = (intStrs) => intStrs.map((el) => parseInt(el));

console.log(parseNumbers([])); //[]
console.log(parseNumbers(['13'])); //[13]
console.log(parseNumbers(['2.48'])); //[2]
