/*
Description:

In this example you need to implement a function that sort a list of integers based on it's binary representation.

The rules are simple:

    sort the list based on the amount of 1's in the binary representation of each number.
    if two numbers have the same amount of 1's, the shorter string goes first. (ex: "11" goes before "101" when sorting 3 and 5 respectively)
    if the strings have the same length, lower decimal number goes first. (ex: 21 = "10101" and 25 = "11001", then 21 goes first as is lower)

Examples:

    Input: [1,15,5,7,3]
        ( in binary strings is: ["1", "1111", "101", "111", "11"])

    Output: [15, 7, 3, 5, 1]
        (and after sortByBinaryOnes is: ["1111", "111", "11", "101", "1"])
*/
function sortByBinaryOnes(list) {
  const result = list.map((el) => el.toString(2));

  result.sort((a, b) => {
    const aBinary = a.match(/1/g)?.length || 0;
    const bBinary = b.match(/1/g)?.length || 0;

    if (aBinary !== bBinary) {
      return bBinary - aBinary;
    }

    if (a.length !== b.length) {
      return a.length - b.length;
    }

    return parseInt(a, 2) - parseInt(b, 2);
  });

  return result.map((el) => parseInt(el, 2));
  ////////////////////////////////////////////!SECTION
  //   return list.sort(
  //     (a, b) =>
  //       b.toString(2).replace(/0/g, ``).length -
  //         a.toString(2).replace(/0/g, ``).length || a - b,
  //   );
}
//////////////////////////////////////////!SECTION
// const sortByBinaryOnes = (list) =>
//   list.sort(
//     (a, b) =>
//       b.toString(2).replace(/0/g, ``).length -
//         a.toString(2).replace(/0/g, ``).length || a - b,
//   );

console.log(sortByBinaryOnes([1, 3])); //[3, 1]
console.log(sortByBinaryOnes([1, 2, 3, 4])); //[3, 1, 2, 4]
console.log(sortByBinaryOnes([1, 15, 7, 3, 5])); //[15, 7, 3, 5, 1]
