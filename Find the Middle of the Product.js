/*
DESCRIPTION:
Given a string of characters, I want the function findMiddle()/find_middle() to return the middle number in the product of each digit in the string.

Example: 's7d8jd9' -> 7, 8, 9 -> 7*8*9=504, thus 0 should be returned as an integer.

Not all strings will contain digits. In this case and the case for any non-strings, return -1.

If the product has an even number of digits, return the middle two digits

Example: 1563 -> 56

NOTE: Remove leading zeros if product is even and the first digit of the two is a zero. Example 2016 -> 1
*/
function findMiddle(str) {
  const numbers = typeof str === 'string' && str.match(/[0-9]/g);
  const result = numbers ? numbers.reduce((acc, el) => acc * el) + '' : '';

  if (result.length == 0) return -1;

  return +result.slice(
    Math.ceil(result.length / 2 - 1),
    ~~(result.length / 2 + 1)
  );
}
//////////////////////////////////////!SECTION
// const findMiddle = (str) =>
//   ((s) => (s ? +s.slice((s.length - 1) / 2, s.length / 2 + 1) : -1))(
//     typeof str === `string` &&
//       /\d/.test(str) &&
//       `${str.match(/\d/g).reduce((pre, val) => pre * val)}`
//   );

console.log(findMiddle('s7d8jd9')); //0
console.log(findMiddle('58jd9fgh/fgh6s.,sdf')); //16
console.log(findMiddle('!zg) !v[5}vv7<=6@o966!b#u56@*r')); //1
console.log(findMiddle(' akh/!pnjxxlb}bkg%}-%.#@2wq/!`')); //2
console.log(findMiddle('`f.17]3k 8[~do]y#$9tta4sx9j74}')); //4
console.log(findMiddle('~! /|xe[y[+*xd52~z2dsnv}z^c=(v')); //20
console.log(findMiddle('qeb4an.=x*5{#^>&1?jll]&)y#`$~{')); //20
console.log(findMiddle('op=> [-)~nn,~vp~_zq*`#*he.qna')); //-1
console.log(findMiddle('8m@*z8x2p3fs|uf)9625fd ].^!<!]')); //73
console.log(findMiddle('4456846955')); //36
