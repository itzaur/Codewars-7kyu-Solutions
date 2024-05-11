/*
DESCRIPTION:
In this kata, we want to discover a small property of numbers. We say that a number is a dd number if it contains d occurences of a digit d, (d is in [1,9]).

Examples
664444309 is a dd number, as it contains 4 occurences of the number 4
30313, 122 are dd numbers as they respectively contain 3 occurences of the number 3, and (1 occurence of the number 1 AND 2 occurences of the number 2)
123109, 0, 56542 are not dd numbers
Task
Your task is to implement a function called is_dd (isDd in javascript) that takes a positive number (type depends on the language) and returns a boolean corresponding to whether the number is a dd number or not.
*/
function isDd(n) {
  const occurrences = `${n}`.split``.reduce((acc, el) => {
    return { ...acc, [el]: (acc[el] || 0) + 1 };
  }, {});

  return Object.entries(occurrences)
    .map(([key, value]) => key == value)
    .includes(true);
  //////////////////////////!SECTION
  //   const occurrences = `${n}`.split``.reduce((acc, el) => {
  //     return { ...acc, [el]: (acc[el] || 0) + 1 };
  //   }, {});

  //   return Object.entries(occurrences).some(([key, val]) => +key === val);
  //////////////////////////!SECTION
  //   const occurrences = `${n}`.split``.reduce((acc, el) => {
  //     return { ...acc, [el]: (acc[el] || 0) + 1 };
  //   }, {});
  //   for (let k in occurrences) {
  //     if (k == occurrences[k]) return true;
  //   }

  //   return false;
}

console.log(isDd(664444309)); //true
console.log(isDd(122)); //true
console.log(isDd(30313)); //true
console.log(isDd(5023011)); //false
console.log(isDd(9081231)); //false
