/*
Description:
Task

Given an array of strings, reverse them and their order in such a way that their lengths stays the same as the lengths of the original inputs.
Example:

Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}

Good luck!
*/
const ultimateReverse = (s) => {
  const length = s.map((el) => el.length);
  const result = s.map((el) => el.split``.reverse().join``).reverse().join``
    .split``;

  return length.map((el) => result.splice(0, el).join``);
  ////////////////////////////////////////////!SECTION
  //   let reversed = [...words.join('')].reverse();
  //   return words.map((word) => reversed.splice(0, word.length).join(''));
};
////////////////////////////////////////////!SECTION
// const ultimateReverse = s =>
//   (arr => s.map(val => arr.splice(0, val.length).join(``)))
//   ([...s.join(``)].reverse());

console.log(
  ultimateReverse(['I', 'like', 'big', 'butts', 'and', 'I', 'cannot', 'lie!']),
); //["!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"]
