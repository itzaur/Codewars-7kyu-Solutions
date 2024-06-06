/*
DESCRIPTION:
A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.

If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)

The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.

The task
Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.

Examples
7 ==> return "Balanced"
Explanation:
middle digit(s): 7
sum of all digits to the left of the middle digit(s) -> 0
sum of all digits to the right of the middle digit(s) -> 0
0 and 0 are equal, so it's balanced.
295591 ==> return "Not Balanced"
Explanation:
middle digit(s): 55
sum of all digits to the left of the middle digit(s) -> 11
sum of all digits to the right of the middle digit(s) -> 10
11 and 10 are not equal, so it's not balanced.
959 ==> return "Balanced"
Explanation:
middle digit(s): 5
sum of all digits to the left of the middle digit(s) -> 9
sum of all digits to the right of the middle digit(s) -> 9
9 and 9 are equal, so it's balanced.
27102983 ==> return "Not Balanced"
Explanation:
middle digit(s): 02
sum of all digits to the left of the middle digit(s) -> 10
sum of all digits to the right of the middle digit(s) -> 20
10 and 20 are not equal, so it's not balanced.
*/
function balancedNum(number) {
  const array = [...`${number}`];

  const leftPart =
    array.length % 2 == 0
      ? array.slice(0, array.length / 2 - 1)
      : array.slice(0, array.length / 2);

  const rightPart = array.slice(array.length / 2 + 1);

  return leftPart.reduce((acc, el) => acc + +el, 0) ===
    rightPart.reduce((acc, el) => acc + +el, 0)
    ? 'Balanced'
    : 'Not Balanced';
  ////////////////////////////!SECTION
  //   return (
  //     ([...`${number}`.slice(`${number}`.length / 2 + 1)].reduce(
  //       (pre, val, idx) => pre + +val - `${number}`[idx],
  //       0
  //     )
  //       ? `Not `
  //       : ``) + `Balanced`
  //   );
  ////////////////////////////!SECTION
  //   var str = `${n}`;

  //   return Array.from(
  //     { length: (str.length - 1) / 2 },
  //     (_, i) => str[i] - str[str.length - 1 - i]
  //   ).reduce((p, c) => p + c, 0) == 0
  //     ? 'Balanced'
  //     : 'Not Balanced';
}

console.log(balancedNum(7)); //'Balanced'
console.log(balancedNum(959)); //'Balanced'
console.log(balancedNum(13)); //'Balanced'
console.log(balancedNum(432)); //'Not Balanced'
console.log(balancedNum(424)); //'Balanced'
console.log(balancedNum(1024)); //'Not Balanced'
console.log(balancedNum(66545)); //'Not Balanced'
console.log(balancedNum(295591)); //'Not Balanced'
console.log(balancedNum(1230987)); //'Not Balanced'
console.log(balancedNum(56239814)); //'Balanced'
