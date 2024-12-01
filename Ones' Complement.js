/*
Description:
The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s for 0s.

For any given binary number,formatted as a string, return the Ones' Complement of that number.

Examples
"0"    -> "1"
"1"    -> "0"
"000"  -> "111"
"1001" -> "0110"
"1001" -> "0110"
*/
function onesComplement(n) {
  return n.replace(/(.)/g, (el) => ({ 0: 1, 1: 0 }[el]));
  //////////////////////////////////////////!SECTION
  //   return n.replace(/./g, i => '10'[i])
  //////////////////////////////////////////!SECTION
  //   return n.replace(/./g, (val) => val ^ 1);
}

console.log(onesComplement('0')); //'1'
console.log(onesComplement('1')); //"0"
console.log(onesComplement('01')); //"10"
console.log(onesComplement('10')); //"01"
console.log(onesComplement('1101')); //"0010"
