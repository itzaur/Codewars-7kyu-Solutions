/*
DESCRIPTION:
When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.
*/
function swap(string) {
  return [...string].map((el) => (el.match(/[aeiou]/g) ? el.toUpperCase() : el))
    .join``;

  // return string.replace(/[aeiou]/g, el => el.toUpperCase() )
}

console.log(swap('')); //""
console.log(swap('   @@@')); //"   @@@"
console.log(swap('HelloWorld!')); //"HEllOWOrld!"
console.log(swap('Sunday')); //"SUndAy"
console.log(swap('Codewars')); //"COdEwArs"
console.log(swap('Monday')); //"MOndAy"
console.log(swap('Friday')); //"FrIdAy"
console.log(swap('abracadabra')); //"AbrAcAdAbrA"
console.log(swap('AbrAcAdAbrA')); //"AbrAcAdAbrA"
console.log(swap('ABRACADABRA')); //"ABRACADABRA"
console.log(swap('aBRaCaDaBRa')); //"ABRACADABRA"
