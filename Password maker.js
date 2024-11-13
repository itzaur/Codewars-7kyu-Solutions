/*
Description:
One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

instead of including i or I put the number 1 in the password;
instead of including o or O put the number 0 in the password;
instead of including s or S put the number 5 in the password.
Examples:
"Give me liberty or give me death"  --> "Gml0gmd"
"Keep Calm and Carry On"            --> "KCaC0"
*/
function makePassword(phrase) {
  return phrase
    .replace(/\w+/g, (el) => el[0])
    .replace(/[o]/gi, 0)
    .replace(/[i]/gi, 1)
    .replace(/[s]/gi, 5)
    .replace(/[' ']/g, '');
  //////////////////////////////////!SECTION
  //   return phrase
  //     .replace(/\w+/g, (el) => el[0])
  //     .replace(/[ios]/gi, (el) => ({ i: 1, o: 0, s: 5 }[el.toLowerCase()]))
  //     .replace(/[' ']/g, '');
  //////////////////////////////////!SECTION
  //   return phrase
  //     .match(/\b\w/g)
  //     .join('')
  //     .replace(/i/gi, '1')
  //     .replace(/o/gi, '0')
  //     .replace(/s/gi, '5');
}

console.log(makePassword('Give me liberty or give me death')); //"Gml0gmd"
console.log(makePassword('Keep Calm and Carry On')); //"KCaC0"
