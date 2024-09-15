/*
Description:
You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

Examples
["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]
*/
function tailSwap(arr) {
  const [head0, tail0] = arr[0].split(':');
  const [head1, tail1] = arr.at(-1).split(':');

  return [`${head0}:${tail1}`, `${head1}:${tail0}`];
  //////////////////////////////////////////////!SECTION
  //   const [[a, b], [c, d]] = arr.map((x) => x.split(':'));
  //   return [`${a}:${d}`, `${c}:${b}`];
}

console.log(tailSwap(['abc:123', 'cde:456'])); //['abc:456', 'cde:123']
console.log(tailSwap(['a:12345', '777:xyz'])); //['a:xyz', '777:12345']
