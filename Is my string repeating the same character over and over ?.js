/*
Description:

Your task is very simple:
Write a function hasOneChar returning:

    true if the given string contains the same character repeated all along the string
    false otherwise.

For instance:

hasOneChar('aaaaa'); //true
hasOneChar('aaaab'); //false
hasOneChar('bbbbb'); //true
hasOneChar('bbabb'); //false

Of course, what comes in mind first is a loop. But the purpose of this Kata is to test your creativity.
You have to achieve it without using any loops.

Corner cases: the function hasOneChar should return true if the string contains one single character.

Be creative!
*/
function hasOneChar(s) {
  return s.replace(new RegExp(s[0], 'g'), '').replace(/\^/g, '') === '';
  //////////////////////////////////////!SECTION
  //   return /^(.)\1*$/.test(s);
  //////////////////////////////////////!SECTION
  //   return s === s[0].repeat(s.length);
  //////////////////////////////////////!SECTION
  //   return new Set(s).size === 1;
  //////////////////////////////////////!SECTION
  //   const regexp = new RegExp(`[^${s[0]}]`, 'gi');

  //   return !regexp.test(s);
}

console.log(hasOneChar('a')); //true
console.log(hasOneChar('aaaaa')); //true
console.log(hasOneChar('aaaab')); //false
console.log(hasOneChar('bbbbb')); //true
console.log(hasOneChar('bbabb')); //false
