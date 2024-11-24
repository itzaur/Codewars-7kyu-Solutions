/*
Description:
Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"
*/
function evenChars(string) {
  const condition = 100;

  return string.length > 1 && string.length <= condition
    ? [...string].filter((el, i) => i % 2)
    : 'invalid string';
  //////////////////////////////////////////!SECTION
  //   return string.length < 2 || string.length > 100
  //     ? `invalid string`
  //     : [...string].filter((_, idx) => idx % 2);
}

console.log(evenChars('1234')); //["2", "4"]
console.log(evenChars(';;;--')); //[";", "-"]
console.log(evenChars('abcdefghijklm')); //["b", "d", "f", "h", "j", "l"]
console.log(
  evenChars(
    'aiqbuwbjqwbckjdwbwkqbefhglqhfjbwqejbcadn.bcaw.jbhwefjbwqkvbweevkj.bwvwbhvjk.dsvbajdv.hwuvghwuvfhgw.vjhwncv.wecnaw.ecnvw.kejvhnw.evjkhweqv.kjhwqeev.kjbhdjk.vbaewkjva'
  )
); //"invalid string"
console.log(evenChars('a')); //"invalid string"
console.log(evenChars('')); //"invalid string"
