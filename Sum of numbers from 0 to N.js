/*
DESCRIPTION:
Description:

We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
Output:

0=0
*/
var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    if (count < 0) return `${count}<0`;
    if (count === 0) return `${count}=0`;

    const result = Array.from({ length: count }, (_, i) => i + 1).reduce(
      (acc, el) => `${acc}+${el}`,
      0
    );
    return `${result} = ${result.split`+`.reduce((acc, el) => acc + +el, 0)}`;
  };

  return SequenceSum;
})();
//////////////////////////!SECTION
// class SequenceSum {
//   static showSequence(count) {
//     if (count < 0) return `${count}<0`;
//     if (count === 0) return '0=0';

//     const sequence = [...Array(count + 1)].map((_, i) => i).join('+');
//     const sum = (count * (count + 1)) / 2;

//     return `${sequence} = ${sum}`;
//   }
// }

console.log(SequenceSum.showSequence(6)); //'0+1+2+3+4+5+6 = 21'
