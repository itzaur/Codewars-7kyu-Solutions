/*
Description:

This kata requires you to convert minutes (int) to hours and minutes in the format hh:mm (string).

If the input is 0 or negative value, then you should return "00:00"

Hint: use the modulo operation to solve this challenge. The modulo operation simply returns the remainder after a division. For example the remainder of 5 / 2 is 1, so 5 modulo 2 is 1.
Example

If the input is 78, then you should return "01:18", because 78 minutes converts to 1 hour and 18 minutes.

Good luck! :D
*/
function timeConvert(num) {
  const hours = ~~(num / 60);
  const minutes = num % 60;
  const formattedHours = hours < 10 ? '0' + hours : hours;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  return num < 0 ? '00:00' : `${formattedHours}:${formattedMinutes}`;
  //////////////////////////////////////////////!SECTION
  //   return num > 0
  //     ? `${(Math.floor(num / 60) + '').padStart(2, '0')}:${((num % 60) + '').padStart(2, '0')}`
  //     : '00:00';
  //////////////////////////////////////////////!SECTION
  //   return [num / 60, num % 60]
  //     .map((n) => Math.floor(Math.max(0, n)).toString().padStart(2, '0'))
  //     .join(':');
}

console.log(timeConvert(0)); //"00:00"
console.log(timeConvert(-6)); //"00:00"
console.log(timeConvert(8)); //'0'+0+':'+'0'+8
console.log(timeConvert(32)); //'0'+0+':'+32
console.log(timeConvert(75)); //'0'+1+':'+15
