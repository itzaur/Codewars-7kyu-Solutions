/*
Description:
My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:

"dolphin" -> "The Dolphin"

However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:

"alaska" -> "Alaskalaska"

Complete the function that takes a noun as a string, and returns her preferred band name written as a string.
*/
function bandNameGenerator(str) {
  return `${str[0] === str.at(-1) ? '' : 'The '}${
    str[0].toUpperCase() + str.slice(1).repeat(str[0] === str.at(-1) ? 2 : 1)
  }`;
  ////////////////////////////////////////////!SECTION
  //   return (
  //     str.endsWith(str[0]) ? `${str.slice(0, -1)}${str}` : `the ${str}`
  //   ).replace(/(^| )\w/g, (val) => val.toUpperCase());
  ////////////////////////////////////////////!SECTION
  //   return ((n) =>
  //     'The '.repeat(1 - n) + str[0].toUpperCase() + str.slice(1).repeat(1 + n))(
  //     str.endsWith(str[0])
  //   );
}

console.log(bandNameGenerator('knife')); //'The Knife'
console.log(bandNameGenerator('tart')); //'Tartart'
console.log(bandNameGenerator('sandles')); //'Sandlesandles'
console.log(bandNameGenerator('bed')); //'The Bed'
