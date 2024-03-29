/*
DESCRIPTION:
Given any number of boolean flags function should return true if and only if one of them is true while others are false. If function is called without arguments it should return false.

  onlyOne() --> false
  onlyOne(true, false, false) --> true
  onlyOne(true, false, false, true) --> false
  onlyOne(false, false, false, false) --> false
*/
function onlyOne(...args) {
  return args.filter((el) => el === true).length === 1;
}

console.log(onlyOne()); //false
console.log(onlyOne(true, false, false)); //true
console.log(onlyOne(true, false, false, true)); //false
console.log(onlyOne(false, false, false, false)); //false
