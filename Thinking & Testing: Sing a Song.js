/*
Description:

No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
*/
function singSong(a, b) {
  if (a == b) return `I have two ${a}s.`;

  return b
    ? `Uhh! ${a[0].toUpperCase() + a.slice(1)}-${b[0] + b.slice(1)}!`
    : `I have a${'aeiou'.includes(a[0].toLowerCase()) ? 'n' : ''} ${a}.`;
  //////////////////////////////////////!SECTION
  //   return b
  //     ? a == b
  //       ? `I have two ${a}s.`
  //       : `Uhh! ${a[0].toUpperCase() + a.slice(1)}-${b}!`
  //     : `I have a${/[aeiou]/i.test(a[0]) ? 'n' : ''} ${a}.`;
}

console.log(singSong('litchi', 'litchi')); //"I have a pen."
console.log(singSong('pen')); //"I have a pen."
//Is this a song you know well?
console.log(singSong('apple')); //"I have an apple."
//More and more familiar melodies ;-)
console.log(singSong('apple', 'pen')); //"Uhh! Apple-pen!"
//Yes, You have a puzzle :D
console.log(singSong('puzzle')); //"I have a puzzle."
//Hmm.. You want to solve this kata :P
console.log(singSong('kata')); //"I have a kata."
//But a puzzle kata is hard to solve :]
console.log(singSong('puzzle', 'kata')); //"Uhh! Puzzle-kata!"
