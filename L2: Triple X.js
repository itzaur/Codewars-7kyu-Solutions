/*
DESCRIPTION:
Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

"abraxxxas" → true
"xoxotrololololololoxxx" → false
"softX kitty, warm kitty, xxxxx" → true
"softx kitty, warm kitty, xxxxx" → false
Note :

capital X's do not count as an occurrence of "x".
if there are no "x"'s then return false
*/
function tripleX(str) {
  return str
    .replaceAll(/[a-w, yz]/g, ' ')
    .trim()
    .replaceAll('X', ' ')
    .trim().split` `[0].includes('xxx');

  //   return /^[^x]*xxx/.test(str);

  //   return str.match(/x../) == 'xxx';

  //   return str.includes('x') ? str.indexOf('x') === str.indexOf('xxx') : false;
}

console.log(tripleX('abraxxxas')); //true
console.log(tripleX('xoxotrololololololoxxx')); //false
console.log(tripleX('soft kitty, warm kitty, xxxxx')); //true
console.log(tripleX('softx kitty, warm kitty, xxxxx')); //false
console.log(tripleX('kittykittysoftX')); //false
console.log(tripleX('xxxwarmxxxwarm')); //true
console.log(tripleX('Xxxxsoftkitty')); //true
console.log(tripleX('xXxxxkitty')); //false
