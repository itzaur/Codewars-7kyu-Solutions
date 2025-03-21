/*
Description:
Implement a function move_zeros which takes two arguments first an array of numbers arrNum and second a Boolean value isRight (default is true) and returns the array with all zero to right if isRight is true else to left if isRight is false.

Example:

arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
move_zeros(arrNum, true) //=> returns [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]

arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
move_zeros(arrNum, false) //=> returns [0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]

arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
move_zeros(arrNum) //=> returns [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]
Tips: Order of other numbers should not change.
*/
function move_zeros(arrNum, isRight) {
  const result = arrNum.filter((el) => el > 0);
  const zerosArr = Array(arrNum.length - result.length).fill(0);

  return isRight || isRight === undefined
    ? result.concat(zerosArr)
    : zerosArr.concat(result);
}
//////////////////////////////////////////////////////////!SECTION
// const move_zeros = (arrNum, isRight = true) =>
//   [...arrNum].sort((a, b) => (!a - !b) * (-1) ** !isRight);

console.log(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], true)); //[12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]
console.log(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], false)); //[0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]
console.log(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0])); //[12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]
