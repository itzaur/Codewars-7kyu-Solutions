/*
Description:
Task
You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

In practice, you should implement this function:

function eliminateUnsetBits(number);
Examples
eliminateUnsetBits("11010101010101") ->  255 (= 11111111)
eliminateUnsetBits("111") ->  7
eliminateUnsetBits("1000000") -> 1
eliminateUnsetBits("000") -> 0
*/
function eliminateUnsetBits(number) {
  return parseInt((number.match(/[1]/g) || []).join``, 2) || 0;
  ////////////////////////////////////////!SECTION
  //   return parseInt(number.replace(/0/g, '') || 0, 2);
  ////////////////////////////////////////!SECTION
  //   return 2 ** number.replace(/0+/g, ``).length - 1;
  ////////////////////////////////////////!SECTION
  //   return +`0b0${number.replace(/0/g, '')}`;
}

console.log(eliminateUnsetBits('11010101010101')); //255
console.log(eliminateUnsetBits('1000000')); //1
console.log(eliminateUnsetBits('000')); //0
