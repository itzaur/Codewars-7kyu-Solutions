/*
Description:
Define a function mul(a, b) that takes two non-negative integers a and b and returns their product.

You should only use the + and/or - operators. Using * is cheating!

You can do this iteratively or recursively.
*/
function mul(a, b) {
  return Array.from({ length: b }, () => a).reduce((acc, el) => acc + el, 0);
  ////////////////////////////////////////!SECTION
  //   return b ? a + mul(a, --b) : a - a;
}

console.log(mul(1, 0)); //0
console.log(mul(0, 1)); //0
console.log(mul(1, 0)); //0
console.log(mul(1, 1)); //1
console.log(mul(2, 2)); //4
console.log(mul(5, 5)); //25
