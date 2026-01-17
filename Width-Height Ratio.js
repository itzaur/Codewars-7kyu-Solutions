/*
Description:

We all use 16:9, 16:10, 4:3 etc. ratios every day. Main task is to determine image ratio by its width and height dimensions.

Function should take width and height of an image and return a ratio string (ex."16:9"). If any of width or height entry is 0 function should throw an exception (or return Nothing).
*/
function calculateRatio(w, h) {
  if (w === 0 || h === 0) {
    throw new Error('Nothing');
  }

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  const divisor = gcd(w, h);

  return `${w / divisor}:${h / divisor}`;
}
