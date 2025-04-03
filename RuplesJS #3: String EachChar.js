/*
Description:

Your team is really excited with all the contributions you've made to the RuplesJS library. They feel the work you're doing will truly help Ruby developers transition to Javascript! They've assigned you another task.
String.eachChar()

In ruby you can add something after each character in a string like so:

"hello".each_char {|c| print c, ' ' } -> "h e l l o "

In the spirit of polymorphism, our eachChar method will allow one of two arguments, a callback function or a string. If a string is presented, it will be added after each character of the original string and return the new string. If a function is presented, it will perform a manipulation of each character in the string.

Example:

"hello".eachChar(" ");
-> "h e l l o "

"hello all".eachChar(function(char) {
  if (char == "l") {
    return char.toUpperCase();
  } else {
    return char;
  }
});
-> "heLLo aLL"

Please add your contribution to RuplesJS!
Check out my other RuplesJS katas:
RuplesJS #1: N Times Do
RuplesJS #2: String Delete
RuplesJS #3: String EachChar
RuplesJS #4: String Formatting
RuplesJS #5: Range
*/
String.prototype.eachChar = function (arg) {
  return [...this].map((el) => (typeof arg === 'function' ? arg(el) : el + arg))
    .join``;
};

console.log('hello'.eachChar(' ')); //"h e l l o "
console.log('hello'.eachChar('123')); //"h123e123l123l123o123"
console.log(''.eachChar('123')); //""
console.log('hello'.eachChar((c) => c.toUpperCase())); //"HELLO"
console.log('H e l l o '.eachChar((c) => (c == ' ' ? '1' : c))); //"H1e1l1l1o1"
console.log(
  'I12 0ca431n35no55t 77re3321231ad 4t4h7771i888973s.'.eachChar((c) =>
    /[0-9]/.test(c) ? '' : c
  )
); //"I cannot read this."
