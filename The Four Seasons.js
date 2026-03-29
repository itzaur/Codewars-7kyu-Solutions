/*
Description:

I highly recommend listening Vivaldi's Four Seasons as an inspiration to solve this Kata :)

In the UK, winter begins on 21 December and ends on 20 March. Spring begins on 21 March and ends on 20 June. Summer begins on 21 June and ends on 20 September. Autumn begins on 21 September and ends on 20 December.

Given a date day from 1 (January 1st) to 365 (December 31th) your task is to return the season of the year that corresponds to that day. If the number given is greater than 365, return "The year flew by!".

Note: We are not considering leap years.
*/
function fourSeasons(d) {
  switch (true) {
    case d > 365:
      return 'The year flew by!';
    case d >= 355 || d <= 79:
      return 'Winter Season';
    case d >= 80 && d <= 171:
      return 'Spring Season';
    case d >= 172 && d <= 263:
      return 'Summer Season';
    case d <= 354 && d >= 264:
      return 'Autumn Season';
  }
}
//////////////////////////////////////////!SECTION
// const fourSeasons = (d) =>
//   d > 365
//     ? `The year flew by!`
//     : d > 354
//       ? `Winter Season`
//       : d > 263
//         ? `Autumn Season`
//         : d > 171
//           ? `Summer Season`
//           : d > 79
//             ? `Spring Season`
//             : `Winter Season`;

console.log(fourSeasons(236)); //'Summer Season'
console.log(fourSeasons(109)); //'Spring Season'
console.log(fourSeasons(312)); //'Autumn Season'
console.log(fourSeasons(1)); //'Winter Season'
console.log(fourSeasons(356)); //'Winter Season'
console.log(fourSeasons(400)); //'The year flew by!'
