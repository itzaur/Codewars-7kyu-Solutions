/*
Description:
The notorious Captain Schneider has given you a very straightforward mission. Any data that comes through the system make sure that only non-special characters see the light of day.

Create a function that given a string, retains only the letters A-Z (upper and lowercase), 0-9 digits, and whitespace characters. Also, returns "Not a string!" if the entry type is not a string.
*/
function nothingSpecial(str) {
  return typeof str == 'string'
    ? str.replace(/[^a-z0-9\s]/gi, '')
    : 'Not a string!';
}

console.log(nothingSpecial('Hello World!')); //'Hello World'
console.log(nothingSpecial('%^Take le$ft ##quad%r&a&nt')); //'Take left quadrant'
console.log(nothingSpecial('M$$$$$$$y ally!!!!!')); //'My ally'
console.log(nothingSpecial(25)); //'Not a string!'
