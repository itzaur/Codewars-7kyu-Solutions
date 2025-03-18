/*
Description:
Write function which will create a string from a list of strings, separated by space.

Example:

["hello", "world"] -> "hello world"
*/
const wordsToSentence = (words) => words.join` `;

console.log(wordsToSentence(['hello', 'world'])); //"hello world"
