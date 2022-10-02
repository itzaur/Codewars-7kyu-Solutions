/*
Description:

Complete the function that accepts a valid string and returns an integer.

Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).
Examples

"Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
"Hello, World!"  ==> 91
"Forty4Three"    ==> 113
*/
function hexHash(code) {
  return [...code].map((el) => el.charCodeAt().toString(16)).join``.replace(
    /\D/g,
    ""
  ).split``.reduce((acc, el) => acc + +el, 0);
}

console.log(hexHash("Yo")); //20

console.log(hexHash("Hello, World!")); //91

console.log(hexHash("Forty4Three")); //113
