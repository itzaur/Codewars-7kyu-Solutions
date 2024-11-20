/*
Description:
Take a string and return a hash with all the ascii values of the characters in the string. Returns nil if the string is empty. The key is the character, and the value is the ascii value of the character. Repeated characters are to be ignored and non-alphebetic characters as well.
*/
function charToAscii(string) {
  const array = [...new Set(string)].join``.match(/[a-z]/gi);

  return (
    array && array.reduce((acc, el) => ({ ...acc, [el]: el.charCodeAt() }), {})
  );
  //////////////////////////////////////////////!SECTION
  //   return string ? [...new Set(string.replace(/[^a-z]/gi, ``))].reduce((pre, val) => ({...pre, [val] : val.charCodeAt()}), {}) : null;
}

console.log(charToAscii('')); //null
console.log(charToAscii('a')); //{"a":97}
console.log(charToAscii('aaa')); //{"a":97}
console.log(charToAscii('hello world')); //{"h":104, "e":101, "l":108, "o":111, "w":119, "r":114, "d":100}
console.log(charToAscii('ABaa ^')); //{"A":65, "B":66, "a":97}
