/*
Description:

You are to implement a getDate function, which takes a unix timestamp and a locale as input and returns the formatted date based on the locale.

the locale formats to use are stored in the preloaded structure formats. For example,

Example:

    getDate(1481020142, 'en-GB') -> '06/12/2016'    (format->'dd/mm/yyyy')
    getDate(1481020142, 'de-DE') -> '06.12.2016'    (format->'dd.mm.yyyy')
    getDate(1481020142, 'hu-HU') -> '2016. 12. 06.' (format->'yyyy. mm. dd.')

little hint: don't choose the hard way
*/
function getDate(uts, loc) {
  return require('moment')
    .unix(uts)
    .format((formats[loc] || 'DD/MM/YYYY').toUpperCase());
}

console.log(getDate(1481020142, 'en-GB')); //'06/12/2016'
console.log(getDate(1481020142, 'en-US')); //'12/6/2016'
console.log(getDate(1481020142, 'de-DE')); //'06.12.2016'
