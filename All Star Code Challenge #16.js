/*
Description:

This Kata is intended as a small challenge for my students

All Star Code Challenge #16

Create a function called noRepeat() that takes a string argument and returns a single letter string of the first not repeated character in the entire string.

noRepeat("aabbccdde") // => "e"
noRepeat("wxyz") // => "w"
noRepeat("testing") // => "e"

Note: ONLY letters from the english alphabet will be used as input There will ALWAYS be at least one non-repeating letter in the input string
*/
function noRepeat(str) {
  const occurrences = [...str].reduce((acc, el) => {
    return { ...acc, [el]: (acc[el] || 0) + 1 };
  }, {});

  return [...str].find((el) => occurrences[el] === 1);
  ////////////////////////////////////////////!SECTION
  //   return [...str].find(
  //     (char, i, arr) => arr.indexOf(char) === arr.lastIndexOf(char)
  //   );
  ////////////////////////////////////////////!SECTION
  //   for (var i of str) if (str.split(i).length == 2) return i;
}

console.log(noRepeat('aabbccdde')); //"e"
console.log(noRepeat('wxyz')); //"w"
console.log(noRepeat('testing')); //"e"
