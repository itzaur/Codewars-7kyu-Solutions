/*
Description:
Description:

Remove all exclamation marks from sentence except at the end.
Examples

"Hi!"     ---> "Hi!"
"Hi!!!"   ---> "Hi!!!"
"!Hi"     ---> "Hi"
"!Hi!"    ---> "Hi!"
"Hi! Hi!" ---> "Hi Hi!"
"Hi"      ---> "Hi"
*/
function remove(string) {
  return string.replace(/!+(?!*$)/g, '');
  //////////////////////////////////!SECTION
  //   return s.replace(/!+([^!])/g, '$1');
}

console.log(remove('Hi!')); //"Hi!"
console.log(remove('Hi!!!')); //"Hi!!!"
console.log(remove('!Hi')); //"Hi"
console.log(remove('!Hi!')); //"Hi!"
console.log(remove('Hi! Hi!')); //"Hi Hi!"
console.log(remove('Hi')); //"Hi"
