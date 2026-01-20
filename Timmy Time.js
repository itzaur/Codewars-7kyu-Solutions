/*
Description:

Write a function changeTime which increases or decreases given time. Input param is string in HH:MM format and delta is integer value -1 or 1 in minutes. Let see some examples:

changeTime('10:00', 1) //return '10:01'
changeTime('10:00', -1) //return '09:59'
changeTime('23:59', 1) //return '00:00'
changeTime('00:00', -1) //return '23:59'
*/
function changeTime(input, delta) {
  const [hours, minutes] = input.split(':').map(Number);

  return new Date(0, 0, 0, hours, minutes + delta).toTimeString().slice(0, 5);
}

console.log(changeTime('10:00', 1)); //'10:01'
console.log(changeTime('10:00', -1)); //'09:59'
console.log(changeTime('23:59', 1)); //'00:00'
console.log(changeTime('00:00', -1)); //'23:59'
