/*
Description:
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/
function switcher(x) {
  const alphabetLength = 26;
  const ASCIICharactersCode = 97;
  const symbols = {
    27: '!',
    28: '?',
    29: ' ',
  };

  const result = Array.from({ length: alphabetLength }, (_, i) =>
    String.fromCharCode(i + ASCIICharactersCode)
  ).reverse();

  return x.map((el, i) => result[el - 1] ?? symbols[el]).join``;
  ////////////////////////////////////////////!SECTION
  //   let obj = { 27: '!', 28: '?', 29: ' ' };

  //   return x
  //     .map(
  //       (el) =>
  //         obj[el] || String.fromCharCode('z'.charCodeAt(0) + 1 - parseInt(el))
  //     )
  //     .join('');
}

console.log(
  switcher([
    '22',
    '20',
    '15',
    '14',
    '1',
    '11',
    '18',
    '21',
    '14',
    '23',
    '12',
    '10',
    '27',
    '2',
    '2',
    '23',
    '5',
    '11',
    '26',
    '11',
    '29',
  ])
); //'eglmzpifmdoq!yydvpap '
console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])); //'codewars'
console.log(
  switcher([
    '25',
    '7',
    '8',
    '4',
    '14',
    '23',
    '8',
    '25',
    '23',
    '29',
    '16',
    '16',
    '4',
  ])
); //'btswmdsbd kkw'
console.log(switcher(['4', '24'])); //'wc'
