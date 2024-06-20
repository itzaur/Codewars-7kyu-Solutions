/*
DESCRIPTION:
Task
Given a string, return if all occurrences of a given letter are always immediately followed by the other given letter.

Worked Example
("he headed to the store", "h", "e") ➞ True

# All occurences of "h": ["he", "headed", "the"]
# All occurences of "h" have an "e" after it.
# Return True

('abcdee', 'e', 'e') ➞ False

# For first "e" we can get "ee"
# For second "e" we cannot have "ee"
# Return False
Examples
("i found an ounce with my hound", "o", "u") ➞ True

("we found your dynamite", "d", "y") ➞ False
Notes
All sentences will be given in lowercase.
*/
function bestFriend(txt, a, b) {
  const result = txt.split` `
    .filter((el) => el.includes(a))
    .map((el) => el.split(`${a + b}`))
    .flat();

  return result.every((el) => !el.includes(a) && a !== b);
  //////////////////////////////////!SECTION
  //   return [...txt].every((el, i) => el !== a || txt[i + 1] === b);
  //////////////////////////////////!SECTION
  //   return !new RegExp(`${a}(?!${b})`).test(txt);
  //////////////////////////////////!SECTION
  //   if (txt === '') {
  //     return true;
  //   }

  //   for (let i = 0; i < txt.length; i++) {
  //     if (txt[i] === a && txt[i + 1] !== b) {
  //       return false;
  //     }
  //   }

  //   return true;
  //////////////////////////////////!SECTION
  //   return txt.split(a + b).length == txt.split(a).length;
}

console.log(bestFriend('', 'z', 'h')); //true
console.log(bestFriend('h', 'z', 'h')); //true
console.log(bestFriend('abhc', 'z', 'h')); //true
console.log(bestFriend('zh', 'z', 'h')); //true
console.log(bestFriend('zoo wee mama', 'm', 'a')); //true
console.log(bestFriend('i found an ounce with my hound', 'o', 'u')); //true
console.log(bestFriend('he headed to the store', 'h', 'e')); //true
console.log(bestFriend('those were their thorns they said', 't', 'h')); //true
console.log(bestFriend('z', 'z', 'h')); //false
console.log(bestFriend('aza', 'z', 'h')); //false
console.log(bestFriend('zh', 'h', 'z')); //false
console.log(bestFriend('ll', 'l', 'l')); //false
console.log(bestFriend('zoo wee mama', 'a', 'm')); //false
console.log(bestFriend('we found your dynamite', 'd', 'y')); //false
console.log(bestFriend('look they took the cookies', 'o', 'o')); //false
console.log(bestFriend('a test', 't', 'e')); //false
console.log(bestFriend('abcde', 'e', 'e')); //false
