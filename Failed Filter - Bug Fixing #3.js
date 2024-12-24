/*
Description:
Failed Filter - Bug Fixing #3
Oh no, Timmy's filter doesn't seem to be working? Your task is to fix the FilterNumber function to remove all the numbers from the string.
*/
const FilterNumbers = (str) => str.match(/[a-z]/gi).join``;
//////////////////////////////////!SECTION
// const FilterNumbers = str => str.replace(/\d/g, '');

console.log(FilterNumbers('test123')); //'test'
console.log(FilterNumbers('a1b2c3')); //'abc'
console.log(FilterNumbers('aa1bb2cc3dd')); //'aabbccdd'
