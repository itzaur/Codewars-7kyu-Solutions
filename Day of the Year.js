/*
Description:

Work out what number day of the year it is.

toDayOfYear([1, 1, 2000]) => 1

The argument passed into the function is an array with the format [D, M, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.

Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:

    The year can be evenly divided by 4;
    If the year can be evenly divided by 100, it is NOT a leap year, unless;
    The year is also evenly divisible by 400. Then it is a leap year.
*/
function toDayOfYear(arr) {
  const LEAP_YEAR_NUM = 400;
  const [day, month, year] = arr;
  const isLeapYear =
    (year % 4 === 0 && year % 100 !== 0) || year % LEAP_YEAR_NUM === 0;
  const daysOptions = {
    1: 31,
    2: isLeapYear ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  return (
    day +
    Object.values(daysOptions)
      .slice(0, month - 1)
      .reduce((acc, el) => acc + el, 0)
  );
  ////////////////////////////////////////////!SECTION
  //   for (var i = 1; i < arr[1]; i++) arr[0] += new Date(arr[2], i, 0).getDate();

  //   return arr[0];
  ////////////////////////////////////////////!SECTION
  //   let d = new Date(arr.reverse().join(','));

  //   return (d - new Date(d.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24;
}

console.log(toDayOfYear([25, 12, 2017])); //359
console.log(toDayOfYear([31, 10, 1991])); //304
console.log(toDayOfYear([1, 5, 3000])); //121
console.log(toDayOfYear([14, 3, 1066])); //73
console.log(toDayOfYear([5, 11, 1604])); //310
console.log(toDayOfYear([31, 12, 2000])); //366
