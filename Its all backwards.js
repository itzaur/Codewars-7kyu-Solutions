/*
Description:

I give you this: ['This', 'Is', 'a' 'Example');

You give me back this: 'examplE a iS thiS'

So. I want what I give you back in reverse order, with only the last letter of each item capitalized. If the item is a single letter word and not capitilized when I give it to you, do not capitalize it.
*/
function flipper(stringArr) {
  return stringArr
    .map(
      (el) =>
        el.toLowerCase().slice(0, -1) +
        (el.length > 1 ? el.at(-1).toUpperCase() : el)
    )
    .reverse().join` `;
}

console.log(flipper(['This', 'Is', 'A', 'Test'])); //"tesT A iS thiS"
console.log(flipper(['This', 'Is', 'a', 'Test'])); //"tesT a iS thiS"
