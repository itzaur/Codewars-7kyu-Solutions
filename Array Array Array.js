/*
Description:
You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
*/
function explode(x) {
  const [key1, key2] = x;

  switch (true) {
    case typeof key1 == 'number' && typeof key2 == 'number':
      return Array.from({ length: key1 + key2 }, (_, i) => i + 1).fill(x);
    case typeof key1 == 'number' || typeof key2 == 'number':
      return Array.from({ length: +key1 || +key2 }, (_, i) => i + 1).fill(x);
    default:
      return 'Void!';
  }
  //////////////////////////////////////////!SECTION
  //   return x.every(isNaN)
  //     ? 'Void!'
  //     : Array(x.reduce((a, c) => a + (+c || 0), 0)).fill(x);
  //////////////////////////////////////////!SECTION
  //   return x.join('').match(/[0-9]/g)
  //     ? Array(x.reduce((a, b) => (typeof b == 'number' ? a + b : a), 0)).fill(x)
  //     : 'Void!';
  //////////////////////////////////////////!SECTION
  //   return /\d+/.test(x)
  //     ? Array(x.filter(Number).reduce((a, c) => a + c, 0)).fill(x)
  //     : 'Void!';
}

console.log(explode([9, 3])); //[[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]
console.log(explode(['a', 3])); //[['a', 3], ['a', 3], ['a', 3]]
console.log(explode([6, 'c'])); //[[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]
console.log(explode(['a', 'b'])); //'Void!'
console.log(explode(['a', 0])); //[]
