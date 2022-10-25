/*
Description:

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
  return (
    [...str].filter((el) => el === "x" || el === "X").length ===
    [...str].filter((el) => el === "o" || el === "O").length
  );
  // return str.replace(/x/gi, "").length === str.replace(/o/gi, "").length;
  // return str.toLowerCase().split("x").length === str.toLowerCase().split("o").length

  //   const result = [...str.toLowerCase()].reduce((acc, el) => {
  //     return { ...acc, [el]: (acc[el] || 0) + 1 };
  //   }, {});
  //   return result["x"] === result["o"];

  //   return (
  //     [...str.toLowerCase()].reduce((acc, el) => {
  //       if (el === "x") acc++;
  //       if (el === "o") acc--;
  //       return acc;
  //     }, 0) === 0
  //   );
}

console.log(XO("xo")); //true
console.log(XO("xxOo")); //true
console.log(XO("xxxm")); //false
console.log(XO("Oo")); //false
console.log(XO("ooom")); //false
console.log(XO("xdfrtXy"));
