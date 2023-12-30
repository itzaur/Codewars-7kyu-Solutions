/*
DESCRIPTION:
In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.

Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"
*/
function calculate(str) {
  const arr = str
    .replaceAll('plus', '+')
    .replaceAll('minus', '-')
    .split(/(\d+)/)
    .filter((el) => el);
  const plusArr = [arr[0]];
  const minusArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '+') {
      plusArr.push(arr[i + 1]);
    } else if (arr[i] === '-') {
      minusArr.push(arr[i + 1]);
    }
  }

  const plusResult = plusArr.length
    ? plusArr.reduce((acc, el) => +acc + +el, 0)
    : 0;
  const minusResult =
    minusArr.length > 1
      ? minusArr.reduce((acc, el) => acc - el, 0)
      : -minusArr[0] || 0;

  return (plusResult + minusResult).toString();

  //   return (
  //     str.split('plus').join` `.split('minus').join(' -').split` `.reduce(
  //       (acc, el) => +acc + +el
  //     ) + ''
  //   );
}

console.log(calculate('1plus2plus3plus4')); //'10'
console.log(calculate('1minus2minus3minus4')); //'-8'
console.log(calculate('1plus2plus3minus4')); //'2'
console.log(calculate('975minus919minus333')); //'-277'
console.log(calculate('926plus91minus832minus552')); //'-367'
