/*
Description:

In this kata you need to create a function that takes a 2D array/list of non-negative integer pairs and returns the sum of all the "saving" that you can have getting the LCM of each couple of number compared to their simple product.

For example, if you are given:

[[15,18], [4,5], [12,60]]

Their product would be:

[270, 20, 720]

While their respective LCM would be:

[90, 20, 60]

Thus the result should be:

(270-90)+(20-20)+(720-60)==840

This is a kata that I made, among other things, to let some of my trainees familiarize with the euclidean algorithm, a really neat tool to have on your belt ;)
*/
function sumDifferencesBetweenProductsAndLCMs(pairs) {
  return pairs.reduce((acc, [a, b]) => {
    const product = a * b;
    const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
    const lcm = (x, y) => (x * y) / gcd(x, y);

    return acc + (product - lcm(a, b) || 0);
  }, 0);
}
//////////////////////////////////////////////////////!SECTION
// const sumDifferencesBetweenProductsAndLCMs = (pairs) =>
//   ((val) =>
//     pairs.reduce((pre, [a, b]) => pre + a * b - (a * b) / (val(a, b) || 1), 0))(
//     function gcd(a, b) {
//       return b ? gcd(b, a % b) : a;
//     }
//   );

console.log(
  sumDifferencesBetweenProductsAndLCMs([
    [15, 18],
    [4, 5],
    [12, 60],
  ])
); //840
console.log(
  sumDifferencesBetweenProductsAndLCMs([
    [1, 1],
    [0, 0],
    [13, 91],
  ])
); //1092
console.log(
  sumDifferencesBetweenProductsAndLCMs([
    [15, 7],
    [4, 5],
    [19, 60],
  ])
); //0
console.log(
  sumDifferencesBetweenProductsAndLCMs([
    [20, 50],
    [10, 10],
    [50, 20],
  ])
); //1890
console.log(sumDifferencesBetweenProductsAndLCMs([])); //0
