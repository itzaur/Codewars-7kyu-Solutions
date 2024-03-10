/*
DESCRIPTION:
You are given an array of numbers. Check if the array contains of pairs, i.e every number occurs exactly two times. If true, return true, otherwise false. Your solution should not modify the input array.
*/
function twins(myArray) {
  const occurrences = myArray.reduce((acc, el) => {
    return { ...acc, [el]: (acc[el] || 0) + 1 };
  }, {});

  return Object.values(occurrences).every((el) => el == 2);
  //////////////!SECTION
  //   return myArray.every(x => myArray.filter(y => x == y).length == 2)
}

console.log(twins([1, 2, 3, 1, 2, 3])); //true
console.log(twins([33, 5, 17, 5])); //false
console.log(twins([2, 16, 2, 17, 2, 16])); //false
