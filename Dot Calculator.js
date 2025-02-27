/*
Description:
Dot Calculator
You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

Here are the following valid operators :

+ Addition
- Subtraction
* Multiplication
// Integer Division
Your Work (Task)
You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

Examples (Input => Output)
* "..... + ..............." => "...................."
* "..... - ..."             => ".."
* "..... - ."               => "...."
* "..... * ..."             => "..............."
* "..... * .."              => ".........."
* "..... // .."             => ".."
* "..... // ."              => "....."
* ". // .."                 => ""
* ".. - .."                 => ""
*/
function dotCalculator(equation) {
  const [a, b] = equation.split(/[-+*//]/).filter((el) => el);
  const operator = equation.match(/[-+*//]/);

  const options = {
    '+': a.length - 1 + (b.length - 1),
    '-': a.length - 1 - (b.length - 1),
    '*': (a.length - 1) * (b.length - 1),
    '/': (a.length - 1) / (b.length - 1),
  };

  return Array(~~options[operator[0]]).fill('.').join``;
  //////////////////////////////////////////////!SECTION
  //   const operations = {
  //     '+': (a, b) => a + b,
  //     '-': (a, b) => a - b,
  //     '*': (a, b) => a * b,
  //     '//': (a, b) => a / b,
  //   };
  //   const [left, operator, right] = equation.split(' ');

  //   return '.'.repeat(operations[operator](left.length, right.length));
}

console.log(dotCalculator('..... + ...............')); //"...................."
console.log(dotCalculator('..... - ...')); //".."
console.log(dotCalculator('..... - .')); //"...."
console.log(dotCalculator('..... * ...')); //"..............."
console.log(dotCalculator('..... * ..')); //".........."
console.log(dotCalculator('..... // ..')); //".."
console.log(dotCalculator('..... // .')); //"....."
console.log(dotCalculator('. // ..')); //""
console.log(dotCalculator('. - .')); //""
