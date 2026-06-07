/*
Description:

Translate number to the selected number system. If the number consists just of digits - return number, else - return string.

  SysNums(5,2) // 101
  SysNums(5,8) // 5
  SysNums(250,2) // 11111010
  SysNums(250,16) // "fa"

#####Hint: System can be 2, 8, 10, 16.
*/
function sysNums(n, sys) {
  if (n === 0) return 0;

  const result = n.toString(sys);

  return /^\d+$/.test(result) ? +result : result;
}
////////////////////////////////!SECTION
// sysNums = (n, s) => (/\D/.test((n = n.toString(s))) ? n : +n);

console.log(sysNums(250, 2)); // 11111010
console.log(sysNums(250, 16)); // 'fa'
console.log(sysNums(0, 16)); // 0
console.log(sysNums(625, 16)); // 271
