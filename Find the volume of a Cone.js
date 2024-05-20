/*
DESCRIPTION:
Find the volume of a cone whose radius and height are provided as parameters to the function volume. Use the value of PI provided by your language (for example: Math.PI in JS, math.pi in Python or Math::PI in Ruby) and round down the volume to an Interger.

If you complete this kata and there are no issues, please remember to give it a ready vote and a difficulty rating. :)
*/
function volume(r, h) {
  const S = Math.PI * r ** 2;
  const V = (1 / 3) * S * h;
  return ~~V;
  ////////////////////////!SECTION
  //   const S = Math.PI * r ** 2;
  //   const V = (1 / 3) * S * h;
  //   return V | 0;
}

console.log(volume(7, 3)); //153
console.log(volume(56, 30)); //98520
console.log(volume(0, 10)); //0
