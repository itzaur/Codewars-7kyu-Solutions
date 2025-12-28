/*
Description:

Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.
Tips:

    The start/end times are given as Date (JS/CoffeeScript), DateTime (C#), Time (Nim), datetime (Python), Time (Ruby), and Data.Time.Clock.UTCTime (Haskell) instances.
    The start time will always be before the end time.

*/
function elapsedSeconds(startDate, endDate) {
  return (
    new Date(endDate - startDate).getSeconds() +
    ~~((endDate - startDate) / 1000 / 60) * 60
  );
  ////////////////////////////////////////!SECTION
  //   return (endDate - startDate) / 1000
}

const start = new Date(2013, 1, 1, 0, 0, 1);
const end = new Date(2013, 1, 1, 0, 0, 2);
const end2 = new Date(2013, 1, 1, 0, 0, 20);
const end3 = new Date(2013, 1, 1, 0, 1, 20);

console.log(elapsedSeconds(start, end)); //1
console.log(elapsedSeconds(end, end2)); //18
console.log(elapsedSeconds(start, end2)); //19
console.log(elapsedSeconds(start, end3)); //79
console.log(elapsedSeconds(end, end3)); //78
