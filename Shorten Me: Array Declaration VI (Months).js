/*
Description:
Shorten Me: Array Declaration VI (Months)
Task

You have to write an array() function returning an array object with elements as follow:

[ 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December' ]

Coding Limitation:

Less than 120 characters
*/
array = (_) =>
  'JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember'
    .repeat(2)
    .match(/[A-Z][a-z]+/g);
//////////////////////////////////////////////////!SECTION
// const array = () =>
//   [...Array(24)].map((_, i) =>
//     new Intl.DateTimeFormat('en', { month: 'long' }).format(new Date(0, i)),
//   );
//////////////////////////////////////////////////!SECTION
// function array() {
//   return [...new Array(24)].map((v, i) =>
//     new Date(0, i).toLocaleString('en', { month: 'long' }),
//   );
// }

console.log(array()); //['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December','January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December']
