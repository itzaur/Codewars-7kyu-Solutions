/*
Description:

No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
*/
function testit(s) {
  return s.replace(/../gi, (el) =>
    String.fromCharCode((el.charCodeAt(0) + el.charCodeAt(1)) / 2)
  );
}

console.log(testit('')); //""
console.log(testit('a')); //"a"
console.log(testit('b')); //"b"
//return s.substr(0,1) ?
console.log(testit('aa')); //"a"
console.log(testit('ab')); //"a"
console.log(testit('bc')); //"b"
//return s.substr(0,s.length/2) ?
console.log(testit('aaaa')); //"aa"
console.log(testit('aaaaaa')); //"aaa"
console.log(testit('abab')); //"aa"
console.log(testit('acac')); //"bb"
console.log(testit('hheelllloo')); //'hello'
console.log(testit('mlnglsu')); //'ljou'
console.log(testit('xegi')); //'nh'
