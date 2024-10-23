/*
Description:
Your friend Rick is trying to send you a message, but he is concerned that it would get intercepted by his partner. He came up with a solution:

Add digits in random places within the message.

Split the resulting message in two. He wrote down every second character on one page, and the remaining ones on another. He then dispatched the two messages separately.

Write a function interweave(s1, s2) that reverses this operation to decode his message!

Example 1: interweave("hlo", "el") -> "hello" Example 2: interweave("h3lo", "el4") -> "hello"

Rick's a bit peculiar about his formats. He would feel ashamed if he found out his message led to extra white spaces hanging around the edges of his message...
*/
function interweave(s1, s2) {
  return [...s1.replace(/[0-9]/g, '0')].map(
    (el, i) => el + s2.replace(/[0-9]/g, '0')[i]
  ).join``.replace(/0|undefined/g, '');
  ////////////////////////////////////!SECTION
  //   let result = '';

  //   for (var i = 0; i < s1.length; i++) {
  //     result += s1[i] + (s2[i] || '');
  //   }

  //   return result.replace(/\d/g, '');
}

console.log(interweave('', '')); //''
console.log(interweave('hlo', 'el')); //'hello'
console.log(interweave('h3lo', 'el4')); //'hello'
