/*
Description:

PPAP

Take two arrays consisting of two strings in each array and combine them into one hyphen seperated string. The first character of each word should be capitalized, no matter the input case. The word common to both arrays should appear as the first and last words in the new string.

Finally, the order of the final string should be the non-common word in the second array as the second word, and the non-common word in the first array as the 3rd word.
*/
function ppap(arr1, arr2) {
  const array = [...arr1, ...arr2].map(
    (el) => el[0].toUpperCase() + el.slice(1).toLowerCase(),
  );

  const commonWord = array.find((el, i) => array.indexOf(el) !== i);
  const [word1, word2] = array.filter((el) => el !== commonWord);

  return `${commonWord}-${word2}-${word1}-${commonWord}`;
}

console.log(ppap(['APPLE', 'pen'], ['peN', 'pInEapple'])); //"Pen-Pineapple-Apple-Pen"
