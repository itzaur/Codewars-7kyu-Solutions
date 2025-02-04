/*
Description:
In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

"our code" => "edo cruo"
-- Normal reversal without spaces is "edocruo".
-- However, there is a space at index 3, so the string becomes "edo cruo"

"your code rocks" => "skco redo cruoy".
"codewars" => "srawedoc"

More examples in the test cases. All input will be lower case letters and in some cases spaces.

Good luck!
*/
function solve(str) {
  const indexes = str.split``
    .map((el, i) => (el === ' ' ? i : null))
    .filter(Number);

  const lengths = str.split` `.map((el) => el.length);

  const reversedString = str.split` `
    .map((el) => [...el].reverse().join``)
    .reverse().join``;

  const result = [],
    result2 = [],
    result3 = [];

  for (let i = 0; i < lengths.length; i++) {
    result2.push(lengths.slice(0, i).reduce((acc, el) => acc + el, 0));
    result3.push(lengths.slice(0, i + 1).reduce((acc, el) => acc + el, 0));
    result.push(reversedString.slice(result2[i], result3[i]));
  }

  return indexes.length ? result.join` ` : reversedString;
  //////////////////////////////////////////////////////////////!SECTION
  //   const arr = [...str].filter((el) => el != ' ');
  //   return str.replace(/\S/g, (_) => arr.pop());
  //////////////////////////////////////////////////////////////!SECTION
  //   var result = str.split(' ').join('').split('').reverse();
  //   str.split('').map((el, index) => {
  //     if (el === ' ') result.splice(index, 0, ' ');
  //   });

  //   return result.join('');
  //////////////////////////////////////////////////////////////!SECTION
  //   const reversed = str.replace(/\ /g, '').split('').reverse();
  //   let count = 0;

  //   return str.replace(/\w/g, (letter) =>
  //     letter === ' ' ? letter : reversed[count++]
  //   );
  //////////////////////////////////////////////////////////////!SECTION
  //   var x = [...str.split` `.join``].reverse(),
  //     k = 0;

  //   return [...str].reduce((r, c, i) => r + (c == ' ' ? c : x[k++]), '');
}

console.log(solve('codewars')); //"srawedoc"
console.log(solve('your code')); //"edoc ruoy"
console.log(solve('your code rocks')); //"skco redo cruoy"
console.log(solve('i love codewars')); //"s rawe docevoli"
