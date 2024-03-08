/*
DESCRIPTION:
In this Kata, you will learn how to remove all empty items in an Array.

In JavaScript, empty items in arrays can be declared by [1, 2,,,3, 4] (Multiple commas without a value in that index)

The values that are not given a value are empty items, and usually add up with others to form <# empty items>; In the example, <2 empty items>

[1, 2, <2 empty items>, 3, 4] should be cleared such that it should be [1, 2, 3, 4]

Example:

Before: [1, 2, 3, <5 empty items>, 4, <1 empty item>, null, undefined];

After: [1, 2, 3, 4, null, undefined];
*/
function clean(arr) {
  return arr.filter((el) => typeof el);
  //////////////!SECTION
  //   return arr.filter(_ => true);
  //////////////!SECTION
  //   return arr.filter((el) => el !== NaN);
  //////////////!SECTION
  //   return arr.filter((el) => el !== !el);
  //////////////!SECTION
  //   return arr.filter(_ => 1);
  //////////////!SECTION
  //   return arr.filter(Array);
  //////////////!SECTION
  //   return arr.filter((_, i) => i in arr);
  //////////////!SECTION
  //   return arr.reduce((acc, el) => [...acc, el], []);
  //////////////!SECTION
  //   return arr.flat();
}

console.log(clean([])); //[]
console.log(clean(Array(500000))); //[]
console.log(clean([1, 2])); //[1, 2]
console.log(clean([1, 2, , , 3, 4])); //[1, 2, 3, 4]
console.log(clean([1, 2, [], , 3])); //[1, 2, [], 3]
console.log(clean([undefined, null, NaN, false, '', 0])); //[undefined, null, NaN, false, '', 0]
console.log(clean([undefined, , , , null, , NaN, , false, '', 4, 3, 2, 1, 0])); //[undefined, null, NaN, false, '', 4, 3, 2, 1, 0]
