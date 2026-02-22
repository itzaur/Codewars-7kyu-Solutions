/*
Description:

No Story

No Description

Only by Thinking and Testing

Look at the results of the testcases, and guess the code!
*/
function testit(s) {
  return s.split(` `).map((el) => {
    return el.length === 1
      ? el.toUpperCase()
      : el.slice(0, -1) + el.slice(-1).toUpperCase();
  }).join` `;
}
//////////////////////////////////////!SECTION
// const testit = (s) => s.replace(/.\b/g, (c) => c.toUpperCase());

console.log(testit('')); //""
console.log(testit('a')); //"A"
console.log(testit('b')); //"B"
console.log(testit('a a')); //"A A"
console.log(testit('a b')); //"A B"
console.log(testit('a b c')); //"A B C"
console.log(testit('rgnm')); //"rgnM"
console.log(testit('aa')); //"aA"
