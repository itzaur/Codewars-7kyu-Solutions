/*
Description:

The Cat In The Hat has cat A under his hat, cat A has cat B under his hat and so on until Z

The Cat In The Hat is 2,000,000 cat units tall.

Each cat is 2.5 times bigger than the cat underneath their hat.

Find the total height of the cats if they are standing on top of one another.

Counting starts from the Cat In The Hat

n = the number of cats

fix to 3 decimal places.
*/
function height(n) {
  let currentHeight = 2_000_000;
  let totalHeight = 2_000_000;

  for (let i = 1; i <= n; i++) {
    currentHeight /= 2.5;
    totalHeight += currentHeight;
  }

  return totalHeight.toFixed(3);
  ////////////////////////////////////!SECTION
  //   return ((2000000 * (1 - Math.pow(0.4, n + 1))) / (1 - 0.4)).toFixed(3);
  ////////////////////////////////////!SECTION
  //   return Array.from({ length: n + 1 }, (_, index) => 2000000 / 2.5 ** index)
  //     .reduce((a, b) => a + b)
  //     .toFixed(3);
}

console.log(height(7)); //"3331148.800"
console.log(height(0)); //"2000000.000"
