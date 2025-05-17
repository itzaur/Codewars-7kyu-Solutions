/*
Description:
Given a string, you progressively need to concatenate the first character from the left and the first character from the right and "1", then the second character from the left and the second character from the right and "2", and so on.

If the string's length is odd drop the central element.

For example:

"abcdef"  --> "af1be2cd3"
"abc!def" --> "af1be2cd3" // same result
*/
function charConcat(string) {
  const str = string.replace(/\s/g, ' ');
  const length = str.length;
  let result = '';

  for (let i = 0; i < ~~(length / 2); i++) {
    result += str[i] + str[length - 1 - i] + (i + 1);
  }

  return result;
  //////////////////////////////////////////!SECTION
  //   const stringArr = string.split('');
  //   let result = '';

  //   for (let count = 1; stringArr.length > 1; count++) {
  //     result += stringArr.shift() + stringArr.pop() + count;
  //   }

  //   return result;
  //////////////////////////////////////////!SECTION
  //   return [...string.slice(0, string.length / 2)]
  //     .map((val, idx) => val + string[string.length - idx - 1] + ++idx)
  //     .join(``);
  //////////////////////////////////////////!SECTION
  // return string.slice(0, str.length/2).replace(/./g, (ch, i) => ch + str.at(-++i) + i);
}

console.log(charConcat('abc def')); //'af1be2cd3'
console.log(charConcat('CodeWars')); //'Cs1or2da3eW4'
console.log(charConcat('CodeWars Rocks')); //'Cs1ok2dc3eo4WR5a 6rs7'
