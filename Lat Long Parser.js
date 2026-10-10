/*
Description:

Google often returns latitude and longitude coordinates in comma separated format, with cardinal directions instead of positive and negative values.

Create a method that takes a string of input, (e.g., "33.4489 S, 70.6693 W"), and returns an array of two elements: the latitude and longitude values (e.g., [-33.4489, -70.6693] or [70.134, 40])

Inputs will always be comma separated, positive numbers, can include floats or whole numbers, with or without cardinal direction letters (N, E, S, and W). Assume positive values when no cardinal direction is specified.

Inputs could have weird spacing, e.g., " 10.22    E, 72.1  N   "

S (South) and W (West) should be converted to negative values.
*/
function latLng(raw) {
  return raw
    .replace(/\s/g, ``)
    .split(`,`)
    .map((el) => {
      const num = Math.abs(parseFloat(el));

      return /[SW]/i.test(el) ? -num : num;
    });
}
////////////////////////////////////////!SECTION
// const latLng = (coords) =>
//   coords.match(/[\d.]+/g).map((c, i) => (coords.includes('SW'[i]) ? -c : +c));

console.log(latLng('26.8206 N, 30.8025 E')); //[26.8206, 30.8025]
console.log(latLng('39.7392 N, 104.9903 W')); //[39.7392, -104.9903]
console.log(latLng('30.367556491951518   N,-42.43396927568606  W  ')); //[ 30.367556491951518, -42.43396927568606 ]
