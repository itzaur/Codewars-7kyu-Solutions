/*
Description:
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/
function mygcd(x, y) {
  return !y ? x : mygcd(y, x % y);
  //////////////////////////////////!SECTION
  //   return y == 0 ? x : mygcd(y, x % y)
  //////////////////////////////////!SECTION
  //   return y ? mygcd(y, x % y) : x;
  //////////////////////////////////!SECTION
  //   while (y)
  //     var t = y,
  //       y = x % y,
  //       x = t;

  //   return x;
  //////////////////////////////////!SECTION
  //   while (y) {
  //     [x, y] = [y, x % y];
  //   }

  //   return x;
  //////////////////////////////////!SECTION
  //   return x ? mygcd(y % x, x) : y;
}

console.log(mygcd(30, 12)); //6
console.log(mygcd(36, 12)); //12
console.log(mygcd(8, 9)); //1
console.log(mygcd(1, 1)); //1
