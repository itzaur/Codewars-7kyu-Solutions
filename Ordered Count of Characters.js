/*
DESCRIPTION:
Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/
const orderedCount = function (text) {
  const occurrences = [...text].reduce((acc, el) => {
    return { ...acc, [el]: (acc[el] || 0) + 1 };
  }, {});
  return [...new Set(text)].map((el) => [el, occurrences[el]]);
  //////////////////!SECTION
  //   return Array.from(
  //     [...text].reduce(
  //       (acc, el) => acc.set(el, (acc.get(el) || 0) + 1),
  //       new Map()
  //     )
  //   );
  //////////////////!SECTION
  //   return [...new Set(text)].map((val) => [val, text.split(val).length - 1]);
};

console.log(orderedCount('abracadabra')); //[['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
console.log(orderedCount('Code Wars')); //[['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]
console.log(orderedCount('233312')); //[['2', 2], ['3', 3], ['1', 1 ]]
