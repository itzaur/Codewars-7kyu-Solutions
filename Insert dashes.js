/*
Description:
Write a function that takes an integer num (num >= 0) and inserts dashes ('-') between each two odd digits in num.

Examples
454793 ---> "4547-9-3"
     0 ---> "0"
     1 ---> "1"
13579  ---> "1-3-5-7-9"
 86420 ---> "86420"
*/
function insertDash(num) {
  const res = [];

  for (let i = 0; i < `${num}`.length; i++) {
    const el = `${num}`;

    if (el[i] % 2 !== 0 && el[i + 1] % 2 !== 0) {
      res.push(el[i]);
      res.push('-');
    } else {
      res.push(el[i]);
    }
  }

  return isNaN(+res.at(-1)) ? res.slice(0, -1).join`` : res.join``;
  ////////////////////////////////////////////////////////////!SECTION
  //   return num.toString().replace(/[13579](?=[13579])/g, '$&-');
  ////////////////////////////////////////////////////////////!SECTION
  //   return String(num).replace(/([13579])(?=[13579])/g, '$1-');
  ////////////////////////////////////////////////////////////!SECTION
  //   return num
  //     .toString()
  //     .split('')
  //     .reduce(
  //       (acc, item, index, arr) =>
  //         acc +
  //         (parseInt(item) % 2 > 0 && parseInt(arr[index - 1]) % 2 > 0
  //           ? '-'
  //           : '') +
  //         item
  //     );
}

console.log(insertDash(454793)); //'4547-9-3'
console.log(insertDash(123456)); //'123456'
console.log(insertDash(1003567)); //'1003-567'
console.log(insertDash(9035170)); //'1003-567'
