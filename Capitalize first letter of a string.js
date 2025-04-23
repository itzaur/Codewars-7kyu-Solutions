/*
Description:
Capitalize First Letter of a String
Write a function capitalize() which capitalizes the first letter (if any) of the given string. For example:

Input	Output
string	String
hello World	Hello World
i love codewars	I love codewars
This sentence is already capitalized	This sentence is already capitalized
0123the first character of this sentence is not a letter	0123the first character of this sentence is not a letter
JavaScript / CoffeeScript: Extend the String prototype with a method capitalize() so you can call it on a string like so: "string".capitalize(). Learn about inheritance and the prototype chain.

Furthermore, the built-in string methods toUpperCase() and toLowerCase() are disabled for this Kata.
*/
String.prototype.capitalize = function () {
  return this.replace(/./g, (el, i) =>
    i === 0 && el.charCodeAt() > 96
      ? String.fromCharCode(el.charCodeAt() - 32)
      : el
  );
  ////////////////////////////////////////////////!SECTION
  //   return this.replace(/^[a-z]/, (c) =>
  //     String.fromCharCode(c.charCodeAt(0) - 32)
  //   );
};

console.log('hello world'.capitalize()); //"Hello world"
console.log('an apple a day keeps the doctor away'.capitalize()); //"An apple a day keeps the doctor away"
console.log('today, I have a dream ... '.capitalize()); //"Today, I have a dream ... "
