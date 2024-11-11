/*
Description:
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/
function divCon(x) {
  return x.reduce(
    (acc, el) => (typeof el == 'number' ? acc + el : acc - el),
    0
  );
  ////////////////////////////////!SECTION
  //   return x.reduce((s, v) => s + (v === +v ? v : -v), 0);
  ////////////////////////////////!SECTION
  //   return x.reduce((pre, val) => pre + (val === +val ? val : -val), 0);
}

console.log(divCon([9, 3, '7', '3'])); //2
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])); //14
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])); //13
