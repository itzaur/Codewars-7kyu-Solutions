/*
DESCRIPTION:
No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
*/
function testIt(f) {
  const testLimit = -459.67;
  const degreesFahrenheitToDegreesCelsius = ((f - 32) * 5) / 9;

  if (f < testLimit) return 'Invalid input!';

  return degreesFahrenheitToDegreesCelsius.toFixed(2) * 1;
}

//Sir, you can have your coffee.
console.log('<font color="#CD7F32">Test for : f = 212</font>');
console.log(testIt(212)); //100
//Would you mind adding ice to your coffee?
console.log('<font color="#CD7F32">Test for : f = 32</font>');
console.log(testIt(32)); //0
//I don't think we need to turn on the air conditioner now
console.log('<font color="#CD7F32">Test for : f = 77</font>');
console.log(testIt(77)); //25
//In general, it is necessary to keep two decimal places.
console.log('<font color="#CD7F32">Test for : f = 0</font>');
console.log(testIt(0)); //17.78
