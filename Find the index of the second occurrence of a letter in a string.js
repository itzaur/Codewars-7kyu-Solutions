/*
DESCRIPTION:
In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

Examples:

secondSymbol('Hello world!!!','l')  --> 3
secondSymbol('Hello world!!!', 'A') --> -1
Good luck ;) And don't forget to rate this Kata if you liked it.
*/
function secondSymbol(s, symbol) {
  const array = [...s];
  const index = s.indexOf(symbol);

  array.splice(index, 1);

  return array.indexOf(symbol) < 0 ? -1 : array.indexOf(symbol) + 1;
  //////////////////////!SECTION
  //   return s.indexOf(symbol, s.indexOf(symbol) + 1);
  //////////////////////!SECTION
  //   return s.replace(symbol, '#').indexOf(symbol);
}

console.log(secondSymbol('Hello world!!!', 'l')); //3
console.log(secondSymbol('Hello world!!!', 'o')); //7
console.log(secondSymbol('Hello world!!!', 'A')); //-1
console.log(secondSymbol('', 'q')); //-1
console.log(secondSymbol('Hello', '!')); //-1
console.log(secondSymbol('TmyDKVNboEXVWDmgbQCDGmqlTqtUmTw', 'W')); //-1
