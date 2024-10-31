/*
Description:
Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.

Examples
input:    "CodeWars" => "CdWr oeas"
           ||||||||      |||| ||||
indices:   01234567      0246 1357
Even indices 0, 2, 4, 6, so we have "CdWr" as the first group.
Odd indices are 1, 3, 5, 7, so the second group is "oeas".
And the final string to return is "Cdwr oeas".

Notes
Tested strings are at least 8 characters long.
*/
function sortMyString(string) {
  let even = '',
    odd = '';

  for (let i = 0; i < string.length; i++) {
    if (!(i % 2)) {
      even += string[i];
    } else {
      odd += string[i];
    }
  }

  return `${even} ${odd}`;
  ////////////////////////////////////!SECTION
  //   return [...string]
  //     .reduce((pre, val, idx) => ((pre[idx % 2] += val), pre), [``, ``])
  //     .join(` `);
}

console.log(sortMyString('CodeWars')); //"CdWr oeas"
console.log(sortMyString("YCOLUE'VREER")); //"YOU'RE CLEVER"
