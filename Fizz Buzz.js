/*
Description:
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]
*/
function fizzbuzz(n) {
  return Array.from({ length: n }, (_, i) =>
    (i + 1) % 3 == 0 && (i + 1) % 5 == 0
      ? 'FizzBuzz'
      : (i + 1) % 5 == 0
      ? 'Buzz'
      : (i + 1) % 3 == 0
      ? 'Fizz'
      : i + 1
  );
  ////////////////////////////////////////////////!SECTION
  //   return [...Array(n)].map((val, idx) =>
  //     !(++idx % 15) ? `FizzBuzz` : !(idx % 5) ? `Buzz` : !(idx % 3) ? `Fizz` : idx
  //   );
}

console.log(fizzbuzz(10)); //[1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']
