/*
Description:

isMatching checks if a string can be created by combining and rearranging the letters of two other strings (not case sensitive).

!Spaces will be ignored but special characters and numbers won't match the string and return false.

For example:
isMatching("email box", "b aIl", "Mo x e") return true
but
isMatching("bouh", "0b", "uh") return false

You need to be able to use all the caracters from the two strings so:
isMatching("kata", "kt", "aaa") return false

*/
function isMatching(string, str1, str2) {
  const result = [...str1, ...str2].sort((a, b) => a.localeCompare(b))
    .join``.toLowerCase().trim``;

  return (
    string.toLowerCase().split``.sort((a, b) => a.localeCompare(b)).join``
      .trim`` === result
  );
}

console.log(isMatching('bouh', '0', 'buh')); //false
console.log(isMatching('kitten', 't', 'eink')); //false
console.log(isMatching('mentalist', 'l.st', 'metan')); //false
console.log(isMatching('impressionistic', 'isis isi', 'precomnt')); //true
console.log(isMatching('email box', 'bail', 'moxe')); //true
console.log(isMatching('detail', 'tlei', 'dai')); //false
console.log(isMatching('detail', 'tlei', 'dai')); //false
