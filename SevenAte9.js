/*
Description:
Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"
*/
function sevenAte9(str) {
  const result = str.replace(/797/g, '77');

  return result.includes('797') ? sevenAte9(result) : result;
  ////////////////////////////////!SECTION
  //   return str.replace(/79(?=7)/g, '7');
  ////////////////////////////////!SECTION
  //   return str.replace(/(?<=7)9(?=7)/g, '');
  ////////////////////////////////!SECTION
  //   return [...str].reduce((a, c) => (str = str.replace(/797/g, 77)), str);
  ////////////////////////////////!SECTION
  //   return str.replace(/(?=797)../g, 7);
}

console.log(sevenAte9('797')); //'77
console.log(sevenAte9('7979797')); //'7777'
console.log(sevenAte9('165561786121789797')); //'16556178612178977'
