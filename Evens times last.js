/*
DESCRIPTION:
Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.
*/
function evenLast(numbers) {
  return (
    numbers.reduce((acc, el, i) => {
      if (i % 2 === 0) return acc + el;
      return acc;
    }, 0) * numbers.at(-1) || 0
  );
}

console.log(evenLast([2, 3, 4, 5])); //30
console.log(evenLast([2, 2, 2, 2])); //8
