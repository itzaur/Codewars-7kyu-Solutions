/*
Description:

The Math.min function has stopped working, so we have to use our own function. We are off to a good start, but this function doesn't seem to handle everything properly. Add in the proper checks to return NaN for anything that isn't an actual number, except treat null like 0.

Note: This min function need not handle more than two arguments.

function min(a, b){
  return (a<b)?a:b;
}
*/
function min(a, b) {
  switch (true) {
    case isNaN(a) || isNaN(b):
      return NaN;
    case a === null && b === null:
      return 0;
    case a === null:
      return 0 < b ? 0 : b;
    case b === null:
      return a < 0 ? a : 0;
    default:
      return a < b ? a : b;
  }
  ////////////////////////////////!SECTION
  //   return isNaN(a) || isNaN(b) ? NaN : a < b ? +a : +b;
  ////////////////////////////////!SECTION
  // return -Math.max(-a, -b);
  ////////////////////////////////!SECTION
  //   return Math.min(a,b);
}

console.log(min(1, -2.5)); //-2.5
console.log(isNaN(min(1.5, NaN))); //NaN
console.log(isNaN(min(1.5, undefined))); //NaN
console.log(min(-Infinity, Infinity)); //-Infinity
console.log(min(null, 2.5)); //0
