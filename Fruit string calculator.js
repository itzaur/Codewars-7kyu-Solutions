/*
Description:
You are given a string of words and numbers. Extract the expression including:

the operator: either addition ("gains") or subtraction ("loses")
the two numbers that we are operating on
Return the result of the calculation.

Notes:

"loses" and "gains" are the only two words describing operators
No fruit debts nor bitten apples = The numbers are integers and no negatives
Examples
"Panda has 48 apples and loses 4"  -->  44
"Jerry has 34 apples and gains 6"  -->  40
Should be a nice little kata for you :)
*/
function calculate(string) {
  const [a, b] = string.split(/[a-z]/gi).filter(Number);
  const options = {
    loses: a - b,
    gains: +a + +b,
  };

  return options[string.match(/loses|gains/g)];
  ////////////////////////////////////////////!SECTION
  //   let [op1, op2] = string.match(/\d+/gm);

  //   return /loses/.test(string) ? +op1 - +op2 : +op1 + +op2;
  ////////////////////////////////////////////!SECTION
  //   const [num1, num2] = string.match(/\d+/g);
  //   return string.includes('gains') ? +num1 + +num2 : +num1 - +num2;
}

console.log(calculate('Panda has 48 apples and loses 4')); //44
console.log(calculate('Jerry has 34 apples and gains 6')); //40
