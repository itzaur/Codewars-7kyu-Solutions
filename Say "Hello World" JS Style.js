/*
Description:

Write the definition of the function "say" such that calling this:

say("Hello")("World")

returns "Hello World"
*/
var say = (string1) => (string2) => `${string1} ${string2}`;

console.log(say('Hello')('World')); //'Hello World'
