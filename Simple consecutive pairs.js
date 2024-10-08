/*
Description:
In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3.
--the last digit has no pair, so we ignore.
More examples in the test cases.

Good luck!

Please also try Simple time difference
*/
function pairs(arr) {
  const array = [];

  for (let i = 0; i < arr.length; i += 2) {
    array.push(arr.slice(i, i + 2));
  }

  return array
    .map(([a, b]) => (Math.abs(a - b) === 1 ? 1 : null))
    .filter((el) => el).length;
  //////////////////////////////////!SECTION
  //   return arr.reduce(
  //     (pre, val, idx) => pre + (++idx % 2 && Math.abs(val - ar[idx]) === 1),
  //     0
  //   );
  //////////////////////////////////!SECTION
  //   let count = 0;

  //   for (let i = 0; i < arr.length; i += 2) {
  //     if (Math.abs(arr[i] - arr[i + 1]) === 1) count++;
  //   }

  //   return count;
  //////////////////////////////////!SECTION
  //   return arr.filter((x, i) => i % 2 && (x - arr[i - 1]) ** 2 == 1).length;
}

console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5])); //3
console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94])); //2
console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35])); //0
console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62])); //4
console.log(pairs([73, 72, 8, 9, 73, 72])); //3
