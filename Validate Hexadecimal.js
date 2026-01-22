/*
Description:

Create a function to validate if a string is a valid hexadecimal.

Two patterns is valid

    6 chars (ff00ff)
    3 chars (f0f).

*/
function isHex(str) {
  return /^([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(str);
  //////////////////////////////!SECTION
  //   return /^([0-9a-f]{3}){1,2}$/i.test(str);
}

console.log(isHex('ff00ff')); //true
console.log(isHex('f0f')); //true
