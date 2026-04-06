/*
Description:

Define a function that will receive a logarithm function, and returns the base of that logarithm.

guessBase(ln) == e

Base is a real number (not only integers) guaranteed to be less than 1e6.

Have a fun time coding!
*/
function determineBase(logFunc) {
  return Math.exp(1 / logFunc(Math.E));
}
////////////////////////////////////////!SECTION
// determineBase = (f) => Math.pow(2, 1 / f(2));

console.log(determineBase(Math.log)); //Math.E
console.log(determineBase(Math.log10)); //10
console.log(determineBase(Math.log2)); //2
console.log(determineBase((n) => Math.log(n) / Math.log(77))); //77
