/*
Description:
Given value of sine,implement function which will return sine,cosine,tangent,and cotangent in list. order must be same as in the description and every number must be rounded to 2 decimal places.If tangent or cotangent can not be calculated just don't contain them in result list.

Trygonometry - https://en.wikipedia.org/wiki/Trigonometry
*/
function sctc(sin) {
  const cos = Math.sqrt(1 - sin * sin);
  const tan = sin / cos;
  const cot = 1 / tan;

  return [
    Math.round(sin * 100) / 100,
    Math.round(cos * 100) / 100,
    Math.round(tan * 100) / 100,
    Math.round(cot * 100) / 100,
  ].filter((el) => el !== Infinity);
  ////////////////////////////////////////////////!SECTION
  //   const cosine = Math.sqrt(1 - sin ** 2);
  //   const tangent = sin / cosine;
  //   const cotangent = cosine / sin;

  //   return [sin, cosine, tangent, cotangent]
  //     .filter(Number.isFinite)
  //     .map((el) => Math.round(el * 100) / 100);
}

console.log(sctc(1)); //[1, 0.0, 0.0]
console.log(sctc(0.5)); //[0.5, 0.87, 0.58, 1.73]
console.log(sctc(Math.sqrt(3) / 2)); //[0.87, 0.5, 1.73, 0.58]
console.log(sctc(Math.sqrt(2) / 2)); //[0.71, 0.71, 1.0, 1.0]
console.log(sctc(0)); //[0, 1.0, 0.0]
console.log(sctc(0.22)); //[0.22, 0.98, 0.23, 4.43]
console.log(sctc(0.15)); //[0.15, 0.99, 0.15, 6.59]
console.log(sctc(0.18)); //[0.18, 0.98, 0.18, 5.46]
console.log(sctc(0.2)); //[0.2, 0.98, 0.2, 4.9]
console.log(sctc(0.1)); //[0.1, 0.99, 0.1, 9.95]
