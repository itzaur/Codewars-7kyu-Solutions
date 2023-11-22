/*
DESCRIPTION:
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
*/
function capitalize(s) {
  const rule1 = [...s].map((el, i) =>
    i % 2 === 0 ? el.toUpperCase() : el.toLowerCase()
  ).join``;
  const rule2 = [...s].map((el, i) =>
    i % 2 !== 0 ? el.toUpperCase() : el.toLowerCase()
  ).join``;

  return [rule1, rule2];

  //   return [...s].reduce(
  //     (acc, el, i) => {
  //       return (acc[i % 2] += el.toUpperCase()), (acc[+!(i % 2)] += el), acc;
  //     },
  //     [``, ``]
  //   );
}

console.log(capitalize('abcdef')); //['AbCdEf', 'aBcDeF']
console.log(capitalize('codewars')); //['CoDeWaRs', 'cOdEwArS']
console.log(capitalize('abracadabra')); //['AbRaCaDaBrA', 'aBrAcAdAbRa']
console.log(capitalize('codewarriors')); //['CoDeWaRrIoRs', 'cOdEwArRiOrS']
