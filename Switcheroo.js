/*
DESCRIPTION:
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/
function switcheroo(x) {
  let result = '';

  for (const el of x) {
    switch (el) {
      case 'a':
        result += 'b';
        continue;
      case 'b':
        result += 'a';
        continue;
      default:
        result += el;
    }
  }

  return result;

  //   return x.replace(/[ab]/gi, (el) => (el === 'a' ? 'b' : 'a'));

  //   return x.replaceAll('a', '+').replaceAll('b', 'a').replaceAll('+', 'b');

  //   const dict = {
  //     a: 'b',
  //     b: 'a',
  //   };

  //   return x.replace(/[ab]/g, (el) => dict[el]);
}

console.log(switcheroo('abc')); //'bac'
console.log(switcheroo('aaabcccbaaa')); //'bbbacccabbb'
console.log(switcheroo('ccccc')); //'ccccc'
