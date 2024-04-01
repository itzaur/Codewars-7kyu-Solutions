/*
DESCRIPTION:
Given 2 string parameters, show a concatenation of:

the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
a separator in between both strings: @@@
the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER 
** Keep in mind that this kata was initially designed for Shell, I'm aware it may be easier in other languages.**
*/
function reverseAndMirror(s1, s2) {
  const head = reverse(s2);
  const tail = reverse(s1) + reverse(s1).split``.reverse().join``;

  return head + '@@@' + tail;
}

function reverse(string) {
  return [...string]
    .reverse()
    .map((el) =>
      el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()
    ).join``;
}
////////////////////!SECTION
// const reverseAndMirror = (s1, s2) =>
//   ((fn) => `${fn(s2)}@@@${fn(s1)}${[...fn(s1)].reverse().join(``)}`)((str) =>
//     [...str]
//       .map((val) => val[`to${val < `a` ? `Low` : `Upp`}erCase`]())
//       .reverse()
//       .join(``)
//   );

console.log(reverseAndMirror('FizZ', 'buZZ')); //"zzUB@@@zZIffIZz"
console.log(reverseAndMirror('String Reversing', 'Changing Case')); //"ESAc GNIGNAHc@@@GNISREVEr GNIRTssTRING rEVERSING"
