/*
DESCRIPTION:
Given a number return the closest number to it that is divisible by 10.

Example input:

22
25
37
Expected output:

20
30
40
*/
const closestMultiple10 = (num) => {
  const ruleNumber = 10;
  const fractional = Number.isInteger(num)
    ? Math.round(((num / ruleNumber) % 1) * Math.pow(ruleNumber, 1))
    : Math.floor(((num / ruleNumber) % 1) * Math.pow(ruleNumber, 1));

  return fractional >= ruleNumber / 2
    ? Math.trunc(num) + (ruleNumber - fractional)
    : Math.trunc(num) - fractional;
  ////////////////////////////////!SECTION
  // return Math.round(num / 10) * 10
};

console.log(closestMultiple10(22)); //20
console.log(closestMultiple10(25)); //30
console.log(closestMultiple10(37)); //40
console.log(closestMultiple10(1337)); //1340
console.log(closestMultiple10(1679.6070586748572)); //1680
console.log(closestMultiple10(1674.5971221311931)); //1670
