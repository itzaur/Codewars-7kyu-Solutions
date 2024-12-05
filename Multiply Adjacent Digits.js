/*
Description:
Multiply the adjacent digits which are not separated by a '-' or a '+' in a string, then do the sum.

For example:

"53+5"    ->   20, which is 5 * 3 + 5
"266-66"  ->   36, which is 2 * 6 * 6 - 6 * 6
"555"     ->  125, which is 5 * 5 * 5
*/
function digitMultiplication(expr) {
  const positiveNumbers = expr.replace(/\-\d*(\.?\d+)/g, '').split('+');
  const negativeNumbers = expr.match(/\-\d*(\.?\d+)/g) || [];

  const positiveResult = positiveNumbers
    .map((el) => el.split``.reduce((acc, el) => acc * el, 1))
    .reduce((acc, el) => acc + el, 0);
  const negativeResult = negativeNumbers
    .map((el) => el.slice(1).split``.reduce((acc, el) => acc * el, 1))
    .reduce((acc, el) => acc + el, 0);

  return positiveResult - negativeResult;
  //////////////////////////////////////////////!SECTION
  // const operators = expr.match(/[+,-]/g) || [];

  // return expr
  //   .split(/[+,-]/)
  //   .map((cur) => cur.split('').reduce((acc, cur) => acc * +cur, 1))
  //   .reduce((sum, cur, i) =>
  //     operators[i - 1] === '+' ? sum + cur : sum - cur
  //   );
}

console.log(
  digitMultiplication(
    '2503-2557-43+14557-105+2+241125-70143-8150+443287-55602+3-2+12743+593+39384-6194-47'
  )
); //8448
console.log(digitMultiplication('53+5')); //20
console.log(digitMultiplication('266-66')); //36
console.log(digitMultiplication('555')); //125
console.log(digitMultiplication('10000345+77-2')); //47
console.log(digitMultiplication('12345-11989+1231111')); //-522
console.log(digitMultiplication('2395')); //270
console.log(digitMultiplication('3434343-12121212+4949494-122')); //191788
console.log(digitMultiplication('13579+9+9+9-11')); //971
console.log(digitMultiplication('6-3-3-3-4')); //-7
