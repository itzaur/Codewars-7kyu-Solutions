/*
Description:
Description
Your job is to write a simple password validation function, as seen on many websites.

The rules for a valid password are as follows:

There needs to be at least 1 uppercase letter.
There needs to be at least 1 lowercase letter.
There needs to be at least 1 number.
The password needs to be at least 8 characters long.
Your function takes a string argument and returns whether it is a valid password, as a boolean.

Examples:
"Abcd1234" ===> true
"Abcd123" ===> false
"abcd1234" ===> false
"AbcdefGhijKlmnopQRsTuvwxyZ1234567890" ===> true
"ABCD1234" ===> false
"Ab1!@#$%^&*()-_+={}[]|\:;?/>.<," ===> true;
"!@#$%^&*()-_+={}[]|\:;?/>.<," ===> false;
*/
function password(str) {
  const length = 8;
  const hasUpperCase = /[A-Z]/.test(str);
  const hasLowerCase = /[a-z]/.test(str);
  const hasNumber = /\d/.test(str);
  const isValidLength = str.length >= length;

  return hasUpperCase && hasLowerCase && hasNumber && isValidLength;
  ////////////////////////////////////!SECTION
  //   return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(str);
  ////////////////////////////////////!SECTION
  //   return ['[A-Z]','[a-z]','\\d','.{8,}'].every(e => new RegExp(e).test(str));
}

console.log(password('Abcd1234')); //true
console.log(password('Abcd123')); //false
console.log(password('abcd1234')); //false
console.log(password('AbcdefGhijKlmnopQRsTuvwxyZ1234567890')); //true
console.log(password('ABCD1234')); //false
console.log(password('Ab1!@#$%^&*()-_+={}[]|:;?/>.<,')); //true
console.log(password('!@#$%^&*()-_+={}[]|:;?/>.<,')); //false
