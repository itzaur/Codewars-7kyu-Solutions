/*
Description:
Failed Sort - Bug Fixing #4
Oh no, Timmy's Sort doesn't seem to be working? Your task is to fix the sortArray function to sort all numbers in ascending order
*/
const sortArray = (value) => value.split``.sort((a, b) => a - b).join``;

console.log(sortArray('12345')); //'12345'
console.log(sortArray('54321')); //'12345'
console.log(sortArray('34251')); //'12345'
