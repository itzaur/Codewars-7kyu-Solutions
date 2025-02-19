/*
Description:
You will be given two ASCII strings, a and b. Your task is write a function to determine which one of these strings is "worth" more, and return it.

A string's worth is determined by the sum of its ASCII codepoint indexes. So, for example, the string HELLO has a value of 372: H is codepoint 72, E 69, L 76, and O is 79. The sum of these values is 372.

In the event of a tie, you should return the first string, i.e. a.
*/
function highestValue(a, b) {
  return [...a].reduce((acc, el) => acc + el.charCodeAt(), 0) >=
    [...b].reduce((acc, el) => acc + el.charCodeAt(), 0)
    ? a
    : b;
}
////////////////////////////////////////////!SECTION
// const highestValue = (a, b) =>
//   ((fn) => (fn(b) > fn(a) ? b : a))((str) =>
//     [...str].reduce((pre, val) => pre + val.charCodeAt(), 0)
//   );

console.log(highestValue('AaBbCcXxYyZz0189', 'KkLlMmNnOoPp4567')); //"KkLlMmNnOoPp4567"
console.log(highestValue('ABcd', '0123')); //"ABcd"
console.log(highestValue('!"?$%^&*()', "{}[]@~'#:;")); //"{}[]@~'#:;"
console.log(highestValue('ABCD', 'DCBA')); //"ABCD"
