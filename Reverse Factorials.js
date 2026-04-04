/*
Description:

I'm sure you're familiar with factorials – that is, the product of an integer and all the integers below it.

For example, 5! = 120, as 5 * 4 * 3 * 2 * 1 = 120

Your challenge is to create a function that takes any number and returns the number that it is a factorial of. So, if your function receives 120, it should return "5!" (as a string).

Of course, not every number is a factorial of another. In this case, your function would return "None" (as a string).
Examples

    120 will return "5!"
    24 will return "4!"
    150 will return "None"
*/
function reverseFactorial(num) {
  let factorial = 1;

  for (let i = 1; factorial <= num; i++) {
    factorial *= i;

    if (factorial === num) {
      return `${i}!`;
    }
  }

  return 'None';
  ////////////////////////////////////!SECTION
  //   var i = 1;
  //   while (n > 1) n /= ++i;
  //   return n === 1 ? i + '!' : 'None';
}

console.log(reverseFactorial(120)); //'5!'
console.log(reverseFactorial(3628800)); //'10!'
console.log(reverseFactorial(150)); //'None'
