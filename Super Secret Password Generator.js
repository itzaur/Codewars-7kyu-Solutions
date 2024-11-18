/*
Description:
Sys Admins are always on your case to improve the strength of your passwords. You could really use a handy function to make your passwords completely un-hackable.

Use the super secret characters in the superSecretChars variable to replace the matching characters in your totally insecure password and make it un-hackable.

eg. replace all 'a's with '@'s. Make sure you get the upper case characters too just in case the user wants to SHOUT their password at you.
*/
// var superSecretChars = [
//   ['a', '@'],
//   ['s', '$'],
//   ['o', '0'],
//   ['h', '5'],
//   ['x', '*'],
// ];
function createSSP(password) {
  const superSecretChars = {
    a: '@',
    s: '$',
    o: '0',
    h: '5',
    x: '*',
  };

  return password.replace(
    /[asohx]/gi,
    (el) => superSecretChars[el.toLowerCase()]
  );
}
////////////////////////////////////////////////!SECTION
// const superSecretChars = [
//   [`a`, `@`],
//   [`s`, `$`],
//   [`o`, `0`],
//   [`h`, `5`],
//   [`x`, `*`],
// ];
// const createSSP = (password) =>
//   superSecretChars.reduce(
//     (pre, val) => pre.replace(new RegExp(val[0], `gi`), val[1]),
//     password
//   );

console.log(createSSP('haxorpassword')); //"5@*0rp@$$w0rd"
console.log(createSSP('HaxorPassword')); //"5@*0rP@$$w0rd"
console.log(createSSP('MuchSecureVeryPassword')); //"Muc5$ecureVeryP@$$w0rd"
console.log(createSSP('')); //""
