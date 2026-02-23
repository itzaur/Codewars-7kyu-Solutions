/*
Description:

We’ve all seen katas that ask for conversion from snake-case to camel-case, from camel-case to snake-case, or from camel-case to kebab-case — the possibilities are endless.

But if we don’t know the case our inputs are in, these are not very helpful.
Task:

So the task here is to implement a function that takes a string and returns a string with the case the input is in. The possible case types are "kebab", "camel", and "snake". If none of the cases match with the input, or if there are no separators / case changes in the input, return "none". Inputs will only have letters (no numbers or special characters).
Some definitions

Kebab case: lowercase-words-separated-by-hyphens

Camel case: lowercaseFirstWordFollowedByCapitalizedWords

Snake case: lowercase_words_separated_by_underscores
Examples:

"hello-world" => "kebab"
"hello-to-the-world" => "kebab"
"helloWorld" => "camel"
"helloToTheWorld" => "camel"
"hello_world" => "snake"
"hello_to_the_world" => "snake"
"hello__world" => "none"
"hello_World" => "none"
"helloworld" => "none"
"hello-World" => "none"
*/
function id(c_str) {
  switch (true) {
    case /^[a-z]+(-[a-z]+)+$/.test(c_str):
      return 'kebab';
    case /^[a-z]+([A-Z][a-z]+)+$/.test(c_str):
      return 'camel';
    case /^[a-z]+(_[a-z]+)+$/.test(c_str):
      return 'snake';
    default:
      return 'none';
  }
  //////////////////////////////////////!SECTION
  //   switch (true) {
  //     case /^([a-z]{1,}\-)+[a-z]+$/.test(c_str):
  //       return 'kebab';
  //     case /^([a-z]{1,}[A-Z]+)+[a-z]+$/.test(c_str):
  //       return 'camel';
  //     case /^([a-z]{1,}\_)+[a-z]+$/.test(c_str):
  //       return 'snake';
  //     default:
  //       return 'none';
  //   }
}
//////////////////////////////////////!SECTION
// const CASE_REG = {
//   snake: /^[a-z]+(?:_[a-z]*)+$/,
//   kebab: /^[a-z]+(?:-[a-z]+)+$/,
//   camel: /^[a-z]+(?:[A-Z][a-z]+)*$/,
// };

// const id = (str) =>
//   Object.keys(CASE_REG).find((cs) => CASE_REG[cs].test(str)) ?? 'none';

console.log(id('hello-world')); //"kebab"
console.log(id('hello-to-the-world')); //"kebab"
console.log(id('hello_world')); //"snake"
console.log(id('hello_to_the_world')); //"snake"
console.log(id('helloWorld')); //"camel"
console.log(id('helloToTheWorld')); //"camel"
console.log(id('hello-World')); //"none"
console.log(id('hello-To-The-World')); //"none"
console.log(id('good-Night')); //"none"
console.log(id('he--llo')); //"none"
