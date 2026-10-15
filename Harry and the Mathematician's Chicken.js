/*
Description:

Harry's local chicken shop - The Golden Chick - sells chicken pieces in boxes of 3, 6 and 10.

Write a function that takes the total number of chicken pieces Harry can eat (n) and returns an array of the possible numbers of chicken pieces he can buy, that are less than or equal to n.

0 chicken pieces is a valid chicken option.

For example: Given n = 9, the result should be [0,3,6,9], as Harry can buy no boxes, a box of 3, a box of 6, or a box of 3 and a box of 6 (9 in total).

For non-numeric input, the function should return [0].

Don't forget to rate this kata!
*/
function chickenOptions(n) {
  if (typeof n !== 'number') return [0];

  const array = Array(n + 1).fill(0);
  array[0] = 1;

  array.forEach((_, i) => {
    return (
      array[i] &&
      [3, 6, 10].forEach((el) => {
        if (i + el <= n) array[i + el] = 1;
      })
    );
  });

  return array.map((el, i) => (el ? i : null)).filter((el) => el !== null);
  ////////////////////////////////////////!SECTION
  //   const result = new Set([0]);

  //   for (let i = 0; i <= n; i++) {
  //     if (result.has(i)) {
  //       [3, 6, 10].forEach((box) => {
  //         if (i + box <= n) result.add(i + box);
  //       });
  //     }
  //   }

  //   return [...result].sort((a, b) => a - b);
}

console.log(chickenOptions(13)); //[ 0, 3, 6, 9, 10, 12, 13 ]
console.log(chickenOptions(2)); //[ 0 ]
console.log(chickenOptions(21)); //[ 0, 3, 6, 9, 10, 12, 13, 15, 16, 18, 19, 20, 21 ]
console.log(chickenOptions('mmmmm chicken')); //[ 0 ]
