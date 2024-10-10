/*
Description:
Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

The list will never be empty and will only contain values that are greater than or equal to zero.

Good luck!
*/
const sumSquareEvenRootOdd = (ns) => {
  return +ns
    .map((el) => (el % 2 ? Math.sqrt(el) : el ** 2))
    .reduce((acc, el) => acc + el, 0)
    .toFixed(2);
  //////////////////////////////////!SECTION
  //   return +ns.reduce((a, b) => a + (b % 2 ? b ** 0.5 : b ** 2), 0).toFixed(2);
  //////////////////////////////////!SECTION
  //   return (
  //     Math.round(
  //       ns.reduce((pre, val) => pre + val ** (val % 2 ? 0.5 : 2), 0) * 1e2
  //     ) / 1e2
  //   );
};

console.log(sumSquareEvenRootOdd([4, 5, 7, 8, 1, 2, 3, 0])); //91.61
console.log(sumSquareEvenRootOdd([1, 14, 9, 8, 17, 21])); //272.71
