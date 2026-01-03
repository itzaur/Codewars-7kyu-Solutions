/*
Description:

You get input data as a number (of megabytes). Your task is to convert it to the string adding 'MB' or 'GB' or 'TB' correctly.

Find the details below:

900 -> '900MB'
1900 -> '1GB 900MB'
568200 -> '568GB 200MB'
1000000 -> '1TB'
1234567 -> '1TB 234GB 567MB'

P.S. 0 <= input number < 1000000000
*/
function formatDataValue(data) {
  return (
    data
      .toLocaleString()
      .split(',')
      .map((el, i, arr) => {
        const units = ['MB', 'GB', 'TB'];

        return el > 0 ? `${+el}${units[arr.length - 1 - i]}` : '';
      }).join` `.trim() || '0MB'
  );
}
////////////////////////////////////////!SECTION
// formatDataValue = (d) =>
//   [
//     `${Math.floor(d / 1e6)}TB`,
//     `${Math.floor((d / 1e3) % 1e3)}GB`,
//     `${d % 1e3}MB`,
//   ].filter((x) => parseInt(x)).join` ` || `0MB`;

console.log(formatDataValue(900)); //'900MB'
console.log(formatDataValue(1900)); //'1GB 900MB'
console.log(formatDataValue(2)); //'2MB'
console.log(formatDataValue(568232)); //'568GB 232MB'
console.log(formatDataValue(568200)); //'568GB 200MB'
console.log(formatDataValue(1000)); //'1GB'
console.log(formatDataValue(123000000)); //'123TB'
console.log(formatDataValue(123452267)); //'123TB 452GB 267MB'
console.log(formatDataValue(855071)); //'855GB 71MB'
