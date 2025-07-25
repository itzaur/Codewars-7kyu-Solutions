/*
Description:
Do you speak retsec?

You and your friends want to play undercover agents. In order to exchange your secret messages, you've come up with the following system: you take the word, cut it in half, and place the first half behind the latter. If the word has an uneven number of characters, you leave the middle at its previous place:

retsec examples

That way, you'll be able to exchange your messages in private.
Task

You're given a single word. Your task is to swap the halves. If the word has an uneven length, leave the character in the middle at that position and swap the chunks around it.
Examples

reverseByCenter("secret")  == "retsec" // no center character
reverseByCenter("agent")   == "nteag"  // center character is "e"

Remarks

Don't use this to actually exchange messages in private.
*/
function reverseByCenter(s) {
  const middle = ~~(s.length / 2);

  const result =
    s.length % 2
      ? s.slice(middle + 1) + s[middle] + s.slice(0, middle)
      : s.slice(middle) + s.slice(0, middle);

  return result;
  //////////////////////////////////////!SECTION
  //   var n = s.length / 2;

  //   return (
  //     s.slice(Math.ceil(n)) +
  //     s.slice(Math.floor(n), Math.ceil(n)) +
  //     s.slice(0, Math.floor(n))
  //   );
}

console.log(reverseByCenter('secret')); //"retsec"
console.log(reverseByCenter('agent')); //"nteag"
console.log(reverseByCenter('raw')); //"war"
console.log(reverseByCenter('onion')); //"onion"
