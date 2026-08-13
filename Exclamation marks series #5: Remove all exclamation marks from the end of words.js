/*
Description:
Task

Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation marks within a word.
Examples

"Hi!" --> "Hi"
"Hi!!!" --> "Hi"
"!Hi" --> "!Hi"
"!Hi!" --> "!Hi"
"Hi! Hi!" --> "Hi Hi"
"!!!Hi !!hi!!! !hi" --> "!!!Hi !!hi !hi"
*/
function remove(string) {
  return string.replace(/!+(\s|$)/g, '$1');
  //////////////////////////////////////!SECTION
  //   return s.replace(/\b!+/g, '');
}

console.log(remove('Hi!')); //"Hi"
console.log(remove('Hi!!!')); //"Hi"
console.log(remove('!Hi')); //"!Hi"
console.log(remove('!Hi!')); //"!Hi"
console.log(remove('Hi! Hi!')); //"Hi Hi"
console.log(remove('!!!Hi !!hi!!! !hi')); //"!!!Hi !!hi !hi"
