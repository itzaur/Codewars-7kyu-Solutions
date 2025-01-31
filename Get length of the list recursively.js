/*
Description:
Write funcion lenR which returns the length of a given list. Try no to cheat and provide recursive solution.
*/
const lenR = (x) => x.length;
////////////////////////////////////////////!SECTION
// const lenR = x => x.length && 1 + lenR(x.slice(1));
////////////////////////////////////////////!SECTION
// function lenR([head, ...tail]) {
//   return !head ? 0 : lenR(tail) + 1;
// }
////////////////////////////////////////////!SECTION
// const lenR = $ => $.length === 0 ? 0 : 1 + lenR($.slice(1));

console.log(lenR([])); //0
console.log(lenR([1])); //1
