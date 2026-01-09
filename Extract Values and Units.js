/*
Description:

Given a string representing a numerical value and a unit, e.g. "12px", return the value and units like so:

input: "12px"
output: {val: 12, units: "px"}

Assume all inputs have a numerical value, but not necessarily any specified units.

There may also be space(s) between the value and the unit, in which case ignore them.
*/
function valAndUnits(s) {
  const value = s.match(/-?\d*\.?\d+/g);
  const units = s.slice(value[0].length).trim();

  return { val: +value, units: units };
  ////////////////////////////////!SECTION
  //   return {val:+s.replace(/[^0-9.-]/g,''), units:s.replace(/[0-9. -]/g,'')}
}

console.log(valAndUnits('12px'));
console.log(valAndUnits('12.5%'));
console.log(valAndUnits('-1rem'));
