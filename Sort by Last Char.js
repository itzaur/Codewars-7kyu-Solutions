/*
Description:
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

All inputs will be valid.
*/
const last = (x) => x.split` `.sort((a, b) => a.at(-1).localeCompare(b.at(-1)));
////////////////////////////////////////////!SECTION
// const last = ($) => $.split(' ').sort((a, b) => a.slice(-1) > b.slice(-1));
////////////////////////////////////////////!SECTION
// function last(x) {
//   return x
//     .split(' ')
//     .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
// }

console.log(last('man i need a taxi up to ubud')); //['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
console.log(last('what time are we climbing up the volcano')); //['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
console.log(last('take me to semynak')); //['take', 'me', 'semynak', 'to']
