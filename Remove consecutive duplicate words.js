/*
DESCRIPTION:
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.
*/
function removeConsecutiveDuplicates(string) {
  let result = [];
  const arr = string.split` `;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
    }
  }

  return result.join` `;

  //   return string.split` `.filter((el, i, arr) => el !== arr[i + 1]).join` `;

  //   return string.split` `
  //     .reduce((acc, el, i, arr) => {
  //       el !== arr[++i] ? (acc += ` ${el}`) : '';
  //       return acc;
  //     }, '')
  //     .trim();
}

console.log(removeConsecutiveDuplicates('')); //""
console.log(removeConsecutiveDuplicates('alpha')); //"alpha"
console.log(removeConsecutiveDuplicates('alpha alphaalpha alphaalphaalpha')); //"alpha alphaalpha alphaalphaalpha"
console.log(
  removeConsecutiveDuplicates(
    'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
  )
); //"alpha beta gamma delta alpha beta gamma delta"
console.log(removeConsecutiveDuplicates('alpha alpha alpha alpha')); //"alpha"
console.log(removeConsecutiveDuplicates('alpha beta alpha')); //"alpha beta alpha"
console.log(removeConsecutiveDuplicates('alpha alphabeta alphagamma')); //"alpha alphabeta alphagamma"
console.log(removeConsecutiveDuplicates('alpha alpha beta alpha alpha')); //"alpha beta alpha"
console.log(removeConsecutiveDuplicates('alpha beta beta')); //"alpha beta"
