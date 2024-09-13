/*
Description:
No Story

No Description

Only by Thinking and Testing

Look at the results of the testcases, and guess the code!
*/
function testit(n) {
  return n.toString(2).split``.filter((el) => el == '1').length;
  //////////////////////////////////!SECTION
  //   return n.toString(2).replace(/0/g, '').length;
  //////////////////////////////////!SECTION
  //   return n.toString(2).split('0').join('').length;
}

console.log(testit(0)); //0
console.log(testit(1)); //1
console.log(testit(2)); //1
console.log(testit(3)); //2
console.log(testit(4)); //1
console.log(testit(5)); //2
console.log(testit(6)); //2
console.log(testit(7)); //3
console.log(testit(8)); //1
console.log(testit(9)); //2
console.log(testit(10)); //2
console.log(testit(100)); //3
console.log(testit(1000)); //6
console.log(testit(10000)); //5
console.log(testit(2935869)); //12
console.log(testit(2298996)); //9
console.log(testit(8717006)); //9
console.log(testit(8882536)); //10
console.log(testit(7779303)); //16
console.log(testit(6105413)); //11
console.log(testit(208358)); //11
console.log(testit(2048707)); //11
console.log(testit(2089987)); //11
console.log(testit(4560804)); //11
console.log(testit(2175719)); //11
