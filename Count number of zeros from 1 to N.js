/*
DESCRIPTION:
Create an algorithm to count the number of zeros that appear between 1 and N.

Examples:

There are 2 zeros from 1 to 20: 10, 20

There are 11 zeros from 1 to 100: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100

countZeros(10); // returns 1
countZeros(100); // returns 11
countZeros(200); // returns 31
*/
function countZeros(n) {
  return Array.from({ length: n }, (_, i) => i + 1)
    .map((el) => `${el}`.split``)
    .flat()
    .filter((el) => el == '0').length;
  ////////////////////////////!SECTION
  //   return --Array.from(Array(++n).keys()).join``.replace(/[1-9]/g, '').length;
}

console.log(countZeros(10)); //1
console.log(countZeros(100)); //11
console.log(countZeros(200)); //31
