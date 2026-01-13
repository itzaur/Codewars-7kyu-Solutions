/*
Description:

Summary: In this kata we want to communiate with a Mayan accountant.

Scenario: You work for the IRS and have been sent the 1040 form for a local Mayan retailer. The Mayan apparently speaks perfect English but has accidentally filled out his Adjusted Gross Income (AGI) in Mayan.

Task: Generate a javascript method that converts a base-20 value into its decimal equivalent. If it cannot be done, return -1.
*/
function convertBase20ToDecimal(init) {
  return parseInt(init, 20) >= 0 ? parseInt(init, 20) : -1;
  //////////////////////////////////////!SECTION
  //   return Object.is(parseInt(n, 20), NaN) ? -1 : parseInt(n, 20);
  //////////////////////////////////////!SECTION
  //   return isNaN(parseInt(n, 20)) ? -1 : parseInt(n, 20);
}

console.log(convertBase20ToDecimal('1')); //1
console.log(convertBase20ToDecimal('A')); //10
console.log(convertBase20ToDecimal('K')); //-1
console.log(convertBase20ToDecimal('50')); //100
console.log(convertBase20ToDecimal('JJ')); //399
console.log(convertBase20ToDecimal('0')); //0
console.log(convertBase20ToDecimal('Bh')); //237
