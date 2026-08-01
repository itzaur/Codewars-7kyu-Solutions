/*
Description:

No Story

No Description

Only by Thinking and Testing

Look at the results of the testcases, and guess the code!
*/
function testit(s) {
  return s.match(/w.*?o.*?r.*?d/gi)?.length || 0;
  //////////////////////////////////!SECTION
  //   return (s.match(/w[^o]*o[^r]*r[^d]*d/gi) || []).length;
}

console.log(testit('word')); //1
console.log(testit('hello world')); //1
console.log(testit('I love codewars.')); //0
console.log(testit('My cat waiting for a dog.')); //1
console.log(testit('We often read book, a word hidden in the book.')); //2
console.log(
  testit(
    'When you in order to do something by a wrong way, your heart will missed somewhere.',
  ),
); //2
console.log(testit('This sentence have one word.')); //1
console.log(testit('This sentence have two word, not one word.')); //2
console.log(testit('One word + one word = three word ;-)')); //3
console.log(testit('Can you find more word for me?')); //1
