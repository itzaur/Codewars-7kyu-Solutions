/*
Description:

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
*/
function isIsogram(str) {
  return [...new Set(str.toLowerCase())].length === str.length;

  //   let arr = [];
  //   return (
  //     [...str.toLowerCase()]
  //       .map((el) => (!arr.includes(el) ? arr.push(el) : false))
  //       .filter(Number).length === str.length
  //   );

  //   let arr = [];
  //   const result = [...str.toLowerCase()].forEach((letter) => {
  //     !arr.includes(letter) ? arr.push(letter) : false;
  //   });
  //   return arr.length === [...str].length;

  //   return (
  //     [...str.toLowerCase()].filter(
  //       (el, i) => [...str.toLowerCase()].indexOf(el) === i
  //     ).length === [...str].length
  //   );

  //   let obj = {};
  //   let arr = str.toLowerCase().split``;
  //   for (const el of arr) {
  //     if (obj[el]) return false;
  //     obj[el] = true;
  //   }

  //   return true;

  // return !/(\w).*\1/i.test(str);
  // return !/([a-z]).*\1/i.test(str)
  // return !str.match(/([a-z]).*\1/i)
  // return !/(.).*\1/i.test(str)
}

console.log(isIsogram("Dermatoglyphics")); //true
console.log(isIsogram("isogram")); //true
console.log(isIsogram("aba")); //false, "same chars may not be adjacent"
console.log(isIsogram("moOse")); //false, "same chars may not be adjacent"
console.log(isIsogram("isIsogram")); //false
console.log(isIsogram("")); //true, "an empty string is a valid isogram"
