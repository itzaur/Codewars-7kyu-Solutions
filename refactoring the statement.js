/*
Description:

We want to convert numbers in a given string to specific characters according to ASCII code with some manipulation on it. This statement 'str8ng is he17e' should converted to 'string is here', its just converting these numbers to ASCII code then to a char according to it.

So you should understand how ASCII code of chars are sorted, and if its begin with 'a' as 0, next one is 'b' which is 1 in someway.

each word contains just one character to convert the number to it.

Example: if given string is '0pple' that will return 'apple'.
*/
function refactoryString(str) {
  const ASCII_OFFSET = 97;

  return str.replace(/\d+/g, (el) =>
    String.fromCharCode(parseInt(el, 10) + ASCII_OFFSET)
  );
  //////////////////////////////////////////////!SECTION
  //   return str.replace(/\d+/g, (i) => String.fromCharCode(+i + 97));
}

console.log(refactoryString('str8ng is he17e')); //'string is here'
console.log(refactoryString('i li10e pro6ramming')); //'i like programming'
